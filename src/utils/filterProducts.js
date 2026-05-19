function normalize(s) {
  return (s || '').toString().trim().toLowerCase()
}

export default function filterProducts(names, products) {
  if (!Array.isArray(names) || !Array.isArray(products)) return []

  const nameSet = new Set(names.map(n => normalize(n)))
  return products.filter(p => nameSet.has(normalize(p.name)))
}
