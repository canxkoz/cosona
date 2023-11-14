import gridfs
from api import cohere_db
from constants import *


def store_pdf(pdf_path):
    # Connect to MongoDB

    # Create a GridFS object
    fs = gridfs.GridFS(cohere_db, collection=COLLECTION_NAME)  # this connects to mongo

    # Read the PDF file as binary data
    with open(pdf_path, "rb") as pdf_file:
        pdf_data = pdf_file.read()

    # Store the binary data in GridFS
    pdf_id = fs.put(pdf_data, filename=pdf_path)

    return pdf_id
