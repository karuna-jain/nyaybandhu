from langchain_community.document_loaders import TextLoader
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings

from langchain.text_splitter import RecursiveCharacterTextSplitter
import os

def load_docs(directory):
    docs = []
    for filename in os.listdir(directory):
        if filename.endswith(".txt"):  # Ensure you're only loading .txt files
            path = os.path.join(directory, filename)  # Full file path
            loader = TextLoader(path, encoding="utf-8")  # Load each .txt file
            docs.extend(loader.load())  # Add content to docs list
    return docs

# Correct folder path where .txt files are stored
documents_directory = os.path.join(os.path.dirname(os.path.dirname(__file__)), "legal_docs")
documents = load_docs(documents_directory)

# Split documents into smaller chunks for processing
splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
texts = splitter.split_documents(documents)

# Create embeddings using HuggingFace model and store in Chroma vector store
embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
db = Chroma.from_documents(texts, embedding=embeddings, persist_directory="db")

print("Documents embedded and stored.")
