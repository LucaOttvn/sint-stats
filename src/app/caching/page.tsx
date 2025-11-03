import { cacheTag, updateTag } from 'next/cache'
import RandomFact from './RandomFact'

export default async function TestPage() {
  'use cache'
  cacheTag('test-page') // Tag this cached content
  
  const time = new Date().toLocaleTimeString()
  const renderId = Math.random().toString(36).substring(7)
  
  console.log(`Rendering page - ID: ${renderId} at ${time}`)
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Cached Time: {time}</h1>
      <p className="text-sm text-gray-600">Render ID: {renderId}</p>
      <p className="mt-2">This page is cached using Next.js 16 Cache Components</p>
      
      <form action={refreshData} className="mt-4">
        <button 
          type="submit"
          className="btn btn--primary"
        >
          Force Refresh Cache
        </button>
      </form>
      
      <div className="mt-4 text-xs text-gray-500">
        <p>💡 Click the button to immediately clear the cache</p>
        <p>Cached content will be served until you click the button</p>
      </div>

      <RandomFact/>
    </div>
  )
}

async function refreshData() {
  'use server'
  console.log('Cache cleared with updateTag!')
  // Immediately clear cache for this tag
  updateTag('test-page')
}
