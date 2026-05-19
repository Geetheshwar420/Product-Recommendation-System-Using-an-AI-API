// Simple client-side fallback recommender when the AI API fails.
// It performs keyword and price-based matching against the product catalog.

function normalize(text = '') {
  return text.toString().toLowerCase()
}

export default function localFallbackRecommend(userInput, products) {
  if (!userInput || !userInput.trim()) return []
  const q = normalize(userInput)

  // Price parsing: look for phrases like "under $500", "below 500", "less than 300"
  const priceMatch = q.match(/(?:under|below|less than|under\s*\$)\s*\$?(\d{2,6})/i)
  const maxPrice = priceMatch ? Number(priceMatch[1]) : null

  // Keywords mapping
  const categoryKeywords = {
    smartphones: ['phone', 'smartphone', 'iphone', 'pixel', 'samsung'],
    laptops: ['laptop', 'notebook', 'macbook', 'rog', 'gaming'],
    headphones: ['headphone', 'headphones', 'earbuds', 'sony', 'bose', 'anker'],
    smartwatches: ['watch', 'smartwatch'],
    tablets: ['tablet', 'ipad']
  }

  // Score products by keyword matches
  const scored = products.map(p => {
    let score = 0
    const hay = normalize([p.name, p.category, p.description].join(' '))

    // price filter
    if (maxPrice !== null && p.price <= maxPrice) score += 5

    // keyword matches
    Object.values(categoryKeywords).forEach(arr => {
      arr.forEach(k => {
        if (hay.includes(k)) {
          if (q.includes(k)) score += 3
        }
      })
    })

    // token matches
    const tokens = q.split(/\s+/).filter(Boolean)
    tokens.forEach(t => {
      if (hay.includes(t)) score += 1
    })

    return { product: p, score }
  })

  // filter by positive score and sort
  const results = scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(s => s.product.name)

  // return up to 8 names
  return results.slice(0, 8)
}
