import axios from 'axios'

// Allow overriding the GROQ endpoint via env for compatibility with different accounts/regions
const GROQ_URL = import.meta.env.VITE_GROQ_API_URL || 'https://api.groq.com/openai/v1/chat/completions'
const MODEL = 'llama-3.1-8b-instant'

function buildPrompt(products, userInput) {
  const catalogJson = JSON.stringify(products.map(p => ({ name: p.name, category: p.category, price: p.price })))

  return `You are an AI product recommendation assistant.\n\nYour task is to recommend ONLY products that exist in the provided catalog.\n\nDo NOT invent products.\nDo NOT recommend products outside the catalog.\n\nPRODUCT CATALOG:\n${catalogJson}\n\nUSER PREFERENCE:\n${userInput}\n\nReturn ONLY a valid JSON array of matching product names.\n\nExample:\n[\n  "iPhone 13",\n  "Samsung Galaxy A54"\n]`
}

async function recommend(userInput, products) {
  if (!userInput || !userInput.trim()) return []

  const prompt = buildPrompt(products, userInput)
  const key = import.meta.env.VITE_GROQ_API_KEY
  if (!key) throw new Error('GROQ API key missing. Set VITE_GROQ_API_KEY in your environment.')

  try {
    console.info('Calling GROQ endpoint:', GROQ_URL)
    const resp = await axios.post(
      GROQ_URL,
      {
        model: MODEL,
        messages: [
          { role: 'system', content: 'You are a product recommendation assistant.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.3
      },
      {
        headers: {
          Authorization: `Bearer ${key}`,
          'Content-Type': 'application/json'
        }
      }
    )

    const text = resp?.data?.choices?.[0]?.message?.content || ''
    // Try safe JSON parse
    try {
      const parsed = JSON.parse(text)
      return Array.isArray(parsed) ? parsed : []
    } catch (e) {
      // attempt to extract json array with regex
      const match = text.match(/\[([\s\S]*?)\]/)
      if (match) {
        try {
          const parsed2 = JSON.parse(match[0])
          return Array.isArray(parsed2) ? parsed2 : []
        } catch (e2) {
          return []
        }
      }
      return []
    }
  } catch (err) {
    // include response body details in console for debugging
    console.error('GROQ API error calling', GROQ_URL, err?.response?.status, err?.response?.data)
    const status = err?.response?.status
    const body = err?.response?.data
    const message = (body && (body.error || body.message)) || err.message || 'GROQ API request failed'
    const e = new Error(`GROQ API error${status ? ` (status ${status})` : ''}: ${message}`)
    e.status = status
    e.body = body
    throw e
  }
}

export default { recommend }
