
# nyaybandhu
# Nyaybandhu Bharat Vaani 🇮🇳 ⚖️

**Nyaybandhu Bharat Vaani** is an advanced AI-powered multilingual legal assistant designed to empower Indian citizens with real-time legal awareness, resources, and support. Built using cutting-edge RAG (Retrieval-Augmented Generation) Architecture with Google's Gemini models, it bridges the gap between complex legal jargons and accessible legal aid.

## ✨ Key Features
- **AI Legal Chatbot:** Get direct answers to your legal queries, contextualized by embedded Indian legal documents (Constitution, IPC, RTI Act, etc.).
- **Multilingual Support:** Full interface and chatbot capabilities available in English, Hindi, and scalable to all regional Indian languages.
- **Micro-Animations & Premium UI:** Built with Tailwind & Shadcn components for an engaging, floating, and flawless responsive user experience.
- **RAG Architecture:** Leverages ChromaDB vector stores and Langchain to securely map real-world legal PDFs and texts directly to user queries.
- **Voice Capabilities:** (Built-in infrastructure for Speech-to-Text).

## 🛠️ Technology Stack
### Frontend
- **React.js 18** (Vite)
- **Tailwind CSS** (for dynamic styling)
- **Shadcn UI & Lucide Icons**
- **i18next** (Multilingual Contexting)

### Backend
- **Python 3.13**
- **FastAPI**
- **Langchain** & **ChromaDB** (Vector Database)
- **Google Generative AI (Gemini 2.5 Flash)**

---

## 🚀 Getting Started

To run this application locally, you must run both the Python Backend server and the React Frontend server simultaneously.

### 1. Backend Setup (FastAPI + AI)
Navigate to the backend directory and set up your virtual Python environment:

```bash
cd nyaybandhu-legal-chatbot/backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

**Environment Variables:**
Create a `.env` file inside the `backend/` folder and insert your Gemini API Key from [Google AI Studio](https://aistudio.google.com/app/apikey).
```env
GEMINI_API_KEY=your_real_api_key_here
```

**Start the Server:**
```bash
uvicorn main:app --reload
```
*The backend API will run on http://localhost:8000.*

### 2. Frontend Setup (React)
Open a new terminal session, navigate to the root directory, install the packages, and run the developer server:

```bash
npm install --legacy-peer-deps
npm run dev
```
*The frontend application will be hosted on http://localhost:5173.*

## 📂 Project Structure
* `src/` - React frontend application, UI components, pages, and i18n dictionaries.
* `nyaybandhu-legal-chatbot/backend/` - FastAPI application, Gemini controllers, and Chromadb embeddings.
* `nyaybandhu-legal-chatbot/legal_docs/` - Raw `.txt` documents storing Indian laws ingested by the RAG Vector DB.

---
*Built to uphold the principles of justice as enshrined in the Constitution of India.*
