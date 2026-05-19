import React from 'react'

export default function ProductCard({ product, highlighted }) {
  return (
    <div aria-label="Product Card" className={`bg-white rounded-lg shadow-sm overflow-hidden transition-smooth transform hover:-translate-y-1 ${highlighted ? 'ring-2 ring-indigo-300' : ''}`}>
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" onError={(e)=>{e.target.onerror=null; e.target.src='https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=400&q=80'}} />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">{product.name}</h4>
          <span className="text-sm text-gray-500">{product.category}</span>
        </div>
        <p className="mt-2 text-sm text-gray-600">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-lg font-bold">${product.price}</div>
          <div className="text-sm text-yellow-500">⭐ {product.rating}</div>
        </div>
        <div className="mt-3">
          <button onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(product.name)}`, '_blank')} className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-smooth">View</button>
        </div>
      </div>
    </div>
  )
}
