from flask import Flask, request
import cohere
from pymongo import MongoClient
from dotenv import load_dotenv
from werkzeug.utils import secure_filename
import pprint
import os
from constants import ALLOWED_EXTENSIONS, PROMPTS
from db import store_pdf
from langchain.chat_models import ChatCohere
from langchain.memory import ConversationBufferMemory
from langchain.chains import LLMChain
from langchain.prompts import (
    ChatPromptTemplate,
    SystemMessagePromptTemplate,
    MessagesPlaceholder,
    HumanMessagePromptTemplate,
)
from langchain.embeddings import CohereEmbeddings
from flask_cors import CORS

load_dotenv()
app = Flask(__name__)
CORS(app, support_credentials=True)
dbClient = MongoClient(os.getenv("ATLAS_URI"))
cohere_db = dbClient[os.getenv("DB_NAME")]
printer = pprint.PrettyPrinter(indent=4)
co = cohere.Client(os.getenv("COHERE_API_KEY"))


@app.route("/")
def hello_world():
    return "Hello, World!"


def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route("/api/upload", methods=["GET", "POST"])
def upload_script():
    if request.method == "POST":
        if "file" not in request.files:
            printer.pprint("No file part")
        file = request.files["file"]
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        if file.filename == "":
            printer.pprint("No selected file")
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            store_pdf(cohere_db, file, filename)
            printer.pprint(f"File saved {filename}")


@app.route("/api/chat", methods=["GET", "POST"])
def chat():
    if request.method == "POST":
        data = request.get_json()
        printer.pprint(data["text"])
        chat_history = data["text"]
        response = get_response(chat_history)
        printer.pprint(response)
        # response = co.chat(data["text"])

        return data


# get response from chatbot given character and previous chat history
def get_response(chat_history, character):
    # Split the chat history into a list of messages
    messages = chat_history.split(',')

    # Separate the chatbot and user messages
    chatbot_messages = messages[::2]
    user_messages = messages[1::2]

    # Initialize the Cohere Client with an API Key
    chat_model = ChatCohere(cohere_api_key=os.getenv("COHERE_API_KEY"))
    embeddings = CohereEmbeddings(cohere_api_key=os.getenv("COHERE_API_KEY"))

    # Define the custom prompt template
    prompt_template = ChatPromptTemplate(
        messages=[
            SystemMessagePromptTemplate.from_template(
                PROMPTS[character]
            ),  # get the template for the character
            MessagesPlaceholder(
                variable_name="chat_history"
            ),  # the chat history from the client
            HumanMessagePromptTemplate.from_template("{user_input}"),
        ]
    )

    # Make a request to the Cohere API and get the response
    response = chat_model.generate(prompt_template)

    return response

    # Create the memory
    memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)

    # Create the LLMChain with memory
    conversation = LLMChain(
        llm=chat_model, prompt=prompt_template, verbose=True, memory=memory
    )

    # Generate a response from the chatbot
    response = conversation.invoke({"user_input": chat_history})
    return response["text"]


if __name__ == "__main__":
    app.run(host="localhost", port=8080, debug=True)
