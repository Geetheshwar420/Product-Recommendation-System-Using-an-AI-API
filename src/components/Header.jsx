import React from 'react'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primaryStart to-primaryEnd text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold">AI Product Recommendations</h1>
        <p className="mt-2 text-indigo-100 max-w-2xl">Enter natural language preferences and get recommendations from our catalog — powered by GROQ AI.</p>
      </div>
    </header>
  )
}
