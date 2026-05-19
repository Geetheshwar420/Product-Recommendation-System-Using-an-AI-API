import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ProductGrid from './components/ProductGrid'
import RecommendationSection from './components/RecommendationSection'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import ProductDetails from './components/ProductDetails'
import productsData from './data/products'
import groqService from './services/groqService'
import localFallback from './services/localFallback'
import filterProducts from './utils/filterProducts'

export default function App() {
  const [products] = useState(productsData)
  const [recommendations, setRecommendations] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    // initial load could fetch remote catalog in real app
  }, [])

  async function handleSearch(input) {
    setError(null)
    setLoading(true)
    setRecommendations([])
    setSelectedProduct(null)
    try {
      const resp = await groqService.recommend(input, products)
      const names = Array.isArray(resp) ? resp : []
      const matched = filterProducts(names, products)
      setRecommendations(matched)
    } catch (err) {
      // If AI fails, fall back to a simple client-side recommender
      console.error('GROQ error, falling back:', err)
      setError('AI recommendation failed; showing local fallback results.')
      try {
        const fallbackNames = localFallback(input, products)
        const matchedFallback = filterProducts(fallbackNames, products)
        setRecommendations(matchedFallback)
      } catch (ferr) {
        console.error('Fallback error', ferr)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 pb-16">
        <SearchBar
          value={query}
          onChange={setQuery}
          onSearch={() => handleSearch(query)}
        />

        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}

        {selectedProduct ? (
          <div className="mt-8">
            <ProductDetails 
              product={selectedProduct} 
              onBack={() => setSelectedProduct(null)} 
            />
          </div>
        ) : (
          <>
            <RecommendationSection 
              products={recommendations} 
              onViewProduct={(p) => setSelectedProduct(p)} 
            />

            <section className="mt-8">
              <h3 className="text-lg font-semibold mb-4">All Products</h3>
              <ProductGrid 
                products={products} 
                highlighted={recommendations} 
                onViewProduct={(p) => setSelectedProduct(p)} 
              />
            </section>
          </>
        )}
      </main>
    </div>
  )
}
