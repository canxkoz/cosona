import gridfs
from werkzeug.datastructures import FileStorage
from constants import *


def store_pdf(cohere_db: str, file: FileStorage, filepath):
    # Create a GridFS object
    # this connects to mongo
    fs = gridfs.GridFS(cohere_db, collection=COLLECTION_NAME)

    # TODO this isn't tested, with file.read(), I hope it works

    # Read the PDF file as binary data
    pdf_data = file.read()

    # Store the binary data in GridFS
    pdf_id = fs.put(pdf_data, filename=filepath)

    return pdf_id


def db_main():
    test_file = FileStorage(
        stream=open("backend/pdfs/harry-potter-and-the-sorcerers-stone-2001.pdf", "rb"),
        filename="test.pdf",
        content_type="application/pdf",
    )

    store_pdf(test_file, "test.pdf")


if __name__ == "__main__":
    db_main()
