# 📄 Docura AI — Intelligent Document Understanding at Scale

**Docura** is an end-to-end, AI-powered document intelligence framework. It helps teams ingest, query, summarize, and extract insights from unstructured files — PDFs, DOCX, PPTX, emails, and more — using an elegant React UI frontend and a modular FastAPI backend optimized for **RAG** (Retrieval-Augmented Generation) at scale.

---

## 🔗 Live Deployments

- 🌐 Frontend (UI): [https://docura-ai.vercel.app](https://docura-ai.vercel.app)  
- ⚙️ Backend (API): [https://docura-nluj.onrender.com](https://docura-nluj.onrender.com)

---

## 🚀 Why Docura?

Whether you're building internal tooling or intelligent customer-facing bots, **Docura** gives you:

- ✅ Real-time document QA with **Gemini 2.5 Flash**
- ✅ Fast, local vector search via **FAISS**
- ✅ Privacy-first architecture: No external API calls required
- ✅ Advanced preprocessing using **NLTK**, smart chunking, and reranking
- ✅ Offline embeddings using **MiniLM** or **GGML**
- ✅ One-click deploy with **Docker** and **FastAPI**

---

## 🧠 Features at a Glance

### ✨ UI Features
- Drag-and-drop file uploads
- Animated, mobile-responsive chat interface
- Rich message UI with inline file type previews
- Typing indicator and user/bot separation
- Input always visible (fixed at bottom)
- Built with React + Tailwind + Framer Motion

### 🛠 Backend Features
- RAG pipeline: **Semantic Search + Keyword Matching + Cross-Encoder Reranking**
- Smart chunking (via NLTK) for better contextual windows
- Modular architecture: plug in your own LLM, embedding model, or vector DB
- Bulk file ingestion with `system_cache` support
- Document-aware chat — citations, highlights, metadata extraction
- Optimized for **local or edge** deployments (no cloud dependency required)

---

## 🧱 Tech Stack

| Layer        | Tools / Libraries                                        |
|--------------|----------------------------------------------------------|
| 🖥 Frontend   | React, TypeScript, Tailwind CSS, Framer Motion, Lucide  |
| ⚙ Backend     | FastAPI, LangChain, FAISS, NLTK, Gemini 2.5 Flash    |
| 🧠 Embedding  | MiniLM, GGML, OpenAI-compatible local models             |
| 🧮 Vector DB  | FAISS (Local / Persistent)                            |
| 🐳 Deployment | Docker, Render, Vercel, Terminal-based runners           |

---

## 📁 File & Format Support

Docura supports intelligent parsing and ingestion of:

- 📄 PDFs
- 📃 DOCX / TXT
- 📊 XLSX / CSV
- 📧 Email (EML)
- 📎 PPTX / HTML
- 🗂️ Bulk folder uploads via `system_cache`

---

## 🧪 Quick Start

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-org/docura.git
cd docura
````

### 2️⃣ Setup Backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# Run server
uvicorn app.main:app --reload
```

Environment variables can be configured via `.env` (e.g., `MODEL_PATH`, `CHROMA_DIR`, etc.)

### 3️⃣ Run Frontend

```bash
cd frontend
pnpm install
pnpm dev
```

Visit: `http://localhost:3000`

---

## 🧠 RAG Architecture Overview

```
[User Input]
     ↓
[Smart Chunker (NLTK)]
     ↓
[Embedding Model (MiniLM/GGML)]
     ↓
[FAISS Vector Search]
     ↓
[Hybrid Retriever]
     → Semantic similarity
     → Keyword matcher
     → Cross-encoder reranker
     ↓
[Gemini 2.5 Flash / OpenAI]
     ↓
[Response + Citation Engine]
```

---

## 🔧 Deployment

### ➤ Docker (Backend)

```bash
docker build -t docura-api .
docker run -p 8000:8000 docura-api
```

### ➤ Vercel (Frontend)

* Connect your frontend repo to Vercel
* Ensure API URL is configured in `.env.local`
* Deploy and done!

### ➤ Render (Backend)

* Point Render service to `backend/app/main.py`
* Add environment variables
* Auto-deploy from GitHub on push

---

## 💡 Extensibility

Want to adapt Docura to your workflow? Try:

* 🔌 Swap Gemini with OpenAI / Claude / LLaMA
* 🧠 Use LangChain agents or tools
* 📥 Hook into file ingestion pipeline (preprocessors, chunkers)
* 🔐 Add authentication for user-specific doc indexing

---

## 📸 Screenshots

*(Replace with your own)*

![Chat Interface with File Upload](./public/screenshot-chat.png)
*Drag-and-drop uploads and interactive chat UI*

![Backend API](./public/screenshot-api.png)
*FastAPI-powered REST interface with FAISS search*

---

## 📄 License

Licensed under the MIT License.

---

## 👨‍💻 Maintainers

Built with ❤️ by **deadbytes**

---

> **Docura** transforms unstructured documents into structured answers, fast. All local. All secure. All yours.

