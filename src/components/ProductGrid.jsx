import React from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({ products, highlighted = [], onViewProduct }) {
  const highlightIds = new Set(highlighted.map(p => p.id))

  return (
    <div aria-label="Product Grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(p => (
        <ProductCard key={p.id} product={p} highlighted={highlightIds.has(p.id)} onViewProduct={onViewProduct} />
      ))}
    </div>
  )
}
