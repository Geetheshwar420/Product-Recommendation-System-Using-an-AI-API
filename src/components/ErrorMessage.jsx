import React from 'react'

export default function ErrorMessage({ message }) {
  if (!message) return null
  return (
    <div className="mt-4 p-4 bg-red-50 border border-red-100 text-red-700 rounded">
      <strong>Error:</strong> {message}
    </div>
  )
}
