import { revalidatePath } from 'next/cache'

export const revalidate = 5

async function refreshData() {
  'use server'
  console.log('Cache cleared!')
  revalidatePath('/test')
}

export default async function TestPage() {
  const time = new Date().toLocaleTimeString()
  
  return (
    <div>
      <h1>Cached Time: {time}</h1>
      <p>This time is cached for 30 seconds</p>
      
      {/* Form that looks like just a button */}
      <form action={refreshData}>
        <button 
          type="submit"
          className="btn btn--primary" // Style it however you want!
        >
          Force Refresh Cache
        </button>
      </form>
    </div>
  )
}
