import Link from 'next/link'

export default function Home({ params }) {
  return (
    <main className='landingPage'>
      <h1 className="choiceText">Choose one of the following Options</h1>
      <div className="landingPageOptions">
        <Link className="CJGroup" href="/create">Create Group</Link>
        <Link className="CJGroup" href="/join">Join Group</Link>
        </div>
    </main>
  )
}
