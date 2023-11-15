from langchain.chat_models import ChatCohere
from langchain.memory import ConversationBufferMemory
from langchain.chains import LLMChain
from langchain.prompts import ChatPromptTemplate, SystemMessagePromptTemplate, MessagesPlaceholder, HumanMessagePromptTemplate

# Define the character's name and description
character_name = "Harry Potter"
character_description = "The famous wizard from the Harry Potter series"

# Define the movie title
movie_title = "Harry Potter and the Sorcerer's Stone"

# Initialize the chat model for the character
chat_model = ChatCohere(cohere_api_key=cohere_api_key)

# Define the custom prompt template
prompt_template = ChatPromptTemplate(
    messages=[
        SystemMessagePromptTemplate.from_template(
            f"You are {character_name}, a central character from the beloved movie {movie_title}. Your knowledge will only be uptill {movie_title}.Remember that the person who you are talking to already knows who you are so you dont need to introduce yourself! "
            f"As {character_name}, {character_description} you possess a unique set of traits, quirks, and a distinct way of speaking."
            f"Remember to embody the essence of {character_name} in your responses, capturing their unique speech patterns, vocabulary, and personality traits. Talk like how an actual person talks to another person, talk in first person and not like a chatbot. !"
            f"Feel free to add humor, wit, or any other defining characteristics that make {character_name} memorable."
            f"Your goal is to engage in a lively and authentic conversation, staying true to the persona of {character_name}.Use your knowledge of the movie and the character's motivations to shape your responses and create an immersive experience for the user."
            f"Have fun and embrace the persona of {character_name} as you bring their dialogues to life! "
        ),
        MessagesPlaceholder(variable_name="chat_history"),
        HumanMessagePromptTemplate.from_template("{user_inputs}"),
    ]
)

# Create the memory
memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)

# Create the LLMChain with memory
conversation = LLMChain(llm=chat_model, prompt=prompt_template, verbose=True, memory=memory)

# Generate a response from the chatbot
response = conversation.predict(user_inputs="Tell me about your adventures at Hogwarts.")
print(response)
