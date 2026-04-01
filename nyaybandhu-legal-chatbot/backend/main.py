from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import os
import asyncio
import google.generativeai as genai
from langchain_community.vectorstores import Chroma
from langchain_huggingface import HuggingFaceEmbeddings

# --- Load environment variables ---
load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise ValueError("❌ GEMINI_API_KEY not found in .env")

# --- Configure Gemini ---
genai.configure(api_key=api_key)
model = genai.GenerativeModel(model_name="models/gemini-2.5-flash")

# --- FastAPI Setup ---
app = FastAPI()

# --- CORS Middleware ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allow multiple frontend ports like 5173, 3000, 8080
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Pydantic Request Model ---
class Query(BaseModel):
    question: str

# --- Load Vector Store ---
print("📦 Loading vector store...")
embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
db = Chroma(persist_directory="db", embedding_function=embeddings)
retriever = db.as_retriever(search_kwargs={"k": 3})  # Top 3 relevant chunks

# --- Root Route ---
@app.get("/")
def root():
    return {"message": "✅ Gemini legal chatbot is running"}

# --- Ask Endpoint ---
@app.post("/ask")
async def ask_legal(query: Query):
    try:
        print(f"📩 Question received: {query.question}")

        # Step 1: Retrieve top matching legal chunks
        relevant_docs = retriever.invoke(query.question)
        context = "\n\n".join([doc.page_content for doc in relevant_docs])

        # Step 2: Prompt Gemini with context + query
        prompt = f"""
        You are a supportive and expert Indian legal assistant. Your goal is to guide citizens regarding the Constitution, IPC, CrPC, RTI, and all other Indian laws.
        
        You have been provided with the following specific Legal Context extracted from user documents. If this context contains the answer, use it and cite it. 
        If the Legal Context does not fully answer the question, or if it is irrelevant to the question, you must use your own vast pre-trained knowledge about Indian laws to answer truthfully and comprehensively.

        Legal Context:
        {context}

        Question: {query.question}
        """

        # Step 3: Ask Gemini for a response
        loop = asyncio.get_event_loop()
        response = await loop.run_in_executor(None, lambda: model.generate_content(prompt))
        answer = response.text.strip()

        print(f"✅ Answer generated.")

        return {"answer": answer}

    except Exception as e:
        print(f"❌ Error: {e}")
        return {"error": str(e)}
