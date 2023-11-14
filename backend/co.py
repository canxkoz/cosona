from pypdf import PdfReader
from db import store_pdf
from api import co


def get_movie_characters(script: str, template: str):
    """
    Script: string of movie script
    Template: string of template to extract characters from script
    Returns a list of characters from a movie script
    """
    input_str = f"{template} {script}"

    response = co.summarize(text=input_str, model="command", format="bullets")
    summary = response.summary


def cleanup_script(filepath: str):
    """
    Takes in a script and returns all the main characters
    """

    ### Extract the text from the pdf
    reader: PdfReader = PdfReader(filepath)
    text = ""

    for page in range(len(reader.pages)):
        text += reader.pages[page].extract_text()

    with open("backend/output.txt", "w", encoding="utf-8") as f:
        f.write(text)

    # store the pdf in the database
    pdf_id = store_pdf(filepath)

    ### Remove all the side characters from the script
    return text


if __name__ == "__main__":
    cleanup_script("backend/pdfs/harry-potter-and-the-sorcerers-stone-2001.pdf")
