# AI Product Recommendation System

This project is a React + Vite frontend that uses the GROQ Chat Completions API to provide product recommendations from a static catalog based on natural language preferences.

## Features

- Product catalog display in a responsive grid
- Natural-language search input
- AI-powered recommendations (GROQ)
- Recommendations highlighted separately
- Loading and error states
- Tailwind CSS styling and responsive design
- Vercel-ready configuration

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Axios
- GROQ Chat Completions API

## Installation

1. Install dependencies:

```bash
npm install
```

1. Create an environment file based on `.env.example` and set your GROQ API key:

```bash
VITE_GROQ_API_KEY=your_api_key_here
```

1. Run development server:

```bash
npm run dev
```

## GROQ API Setup

Sign up for a Groq account and obtain an API key. Set the key in your `.env` file as `VITE_GROQ_API_KEY`.

The app sends the full product catalog and user preference to the GROQ Chat Completions endpoint and expects a JSON array of product names in response.

If your Groq account or region uses a different endpoint hostname/path, set `VITE_GROQ_API_URL` in your `.env` to override the default. Example:

```bash
# optional: override default endpoint
VITE_GROQ_API_URL=https://api.groq.ai/v1/chat/completions
```

## Deployment (Vercel)

This project includes `vercel.json` for deployment as a static site. On Vercel, set the `VITE_GROQ_API_KEY` environment variable in your project settings.

## Folder Structure

```text
src/
├── components/
├── data/
├── services/
├── utils/
├── App.jsx
├── main.jsx
└── index.css
```

## Example Prompts

- "I want a phone under $500"
- "Suggest gaming laptops"
- "Recommend affordable headphones"

## Notes


- The AI is instructed not to invent products. Results are cross-checked against the local catalog before display.

- If the GROQ API fails, the app shows an error message and falls back to a local keyword-based recommender so you still get useful suggestions.

## Security & Deployment Notes

- Do NOT commit your real API keys to source control. The `.env` file is listed in `.gitignore` for this reason.
- For production deployments, set `VITE_GROQ_API_KEY` as an environment variable in your hosting provider (for Vercel, set it in Project Settings -> Environment Variables). Avoid shipping secret keys to client-side bundles; prefer a server-side proxy or serverless function to keep the key private.
- During local development, `VITE_` prefixed env vars are exposed to the browser by Vite. This is convenient for demos but not secure for production secrets.

