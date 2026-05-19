import React from 'react'

export default function RecommendationSection({ products = [] }) {
  if (!products || products.length === 0) return null

  return (
    <section className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Recommended For You</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(p => (
          <div key={p.id} className="bg-white p-4 rounded-lg shadow-md ring-1 ring-indigo-100">
            <div className="flex items-start gap-4">
              <img src={p.image} alt={p.name} className="w-20 h-16 object-cover rounded" onError={(e)=>{e.target.onerror=null; e.target.src='https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=400&q=80'}} />
              <div>
                <div className="font-semibold">{p.name}</div>
                <div className="text-sm text-gray-500">{p.category} • ${p.price}</div>
                <div className="mt-2 text-sm text-gray-600">{p.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
