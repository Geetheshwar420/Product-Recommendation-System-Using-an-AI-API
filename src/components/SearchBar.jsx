import React from 'react'

export default function SearchBar({ value, onChange, onSearch }) {
  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
      <div className="flex gap-3">
        <input
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && onSearch()}
          placeholder="Try: 'I want a phone under $500'"
          className="flex-1 px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          onClick={onSearch}
          className="px-4 py-2 bg-gradient-to-r from-primaryStart to-primaryEnd text-white rounded-md hover:opacity-95 transition-smooth"
        >
          Search
        </button>
      </div>
    </div>
  )
}
