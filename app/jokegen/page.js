import Image from 'next/image'





export default function Home() {
  return (
    <main>
    <h1 className="text-4xl font-bold underline">
      If Chuck Norris Was a ..
    </h1>
    <form>
        <input className='bg-gray-200 shadow-inner rounded-l p-2 flex-1' id='joke' type='text' aria-label='email address' placeholder='If Chuck Norris Was A ...' />
        <button className='bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r' type='submit'>
          Generate Joke
        </button>
      </form>
   
    </main>
  )
}
