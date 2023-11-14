from flask import Flask, request, flash, redirect, url_for
import cohere
from pymongo import MongoClient
from dotenv import load_dotenv
from werkzeug.utils import secure_filename
import pprint
import os
from constants import ALLOWED_EXTENSIONS

load_dotenv()
app = Flask(__name__)
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
            file.save("backend/pdfs/" + filename)
            printer.pprint(f"File saved {filename}")


# app.run(host="localhost", port=8000, debug=True)
