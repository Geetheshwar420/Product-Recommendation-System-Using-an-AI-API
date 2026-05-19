import React from 'react'

export default function ProductDetails({ product, onBack }) {
  if (!product) return null

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6 md:p-10 relative">
      <button 
        onClick={onBack}
        className="absolute top-4 left-4 flex items-center text-gray-500 hover:text-indigo-600 transition-smooth font-medium"
      >
        <span className="mr-2">←</span> Back to products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        <div className="flex justify-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full max-w-md rounded-lg object-cover shadow-sm" 
            onError={(e)=>{e.target.onerror=null; e.target.src='https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80'}} 
          />
        </div>
        
        <div className="flex flex-col">
          <span className="text-sm text-indigo-600 font-semibold tracking-wide uppercase mb-2">{product.category}</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
          
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
            </div>
            <span className="text-sm text-gray-500 hover:text-indigo-600 cursor-pointer">{product.rating} out of 5 stars</span>
          </div>
          
          <hr className="my-4 border-gray-200" />
          
          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-900">${product.price}</span>
            <span className="text-sm text-gray-500 ml-2">Free Returns</span>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">About this item</h3>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="mt-auto space-y-3 pt-6 border-t border-gray-200">
            <button onClick={() => alert(`Added ${product.name} to your cart!`)} className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-full transition-smooth">
              Add to Cart
            </button>
            <button onClick={() => alert(`Proceeding to checkout for ${product.name}`)} className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-smooth">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
