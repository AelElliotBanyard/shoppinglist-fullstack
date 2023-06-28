import Link from 'next/link'

export default function Home({ params }) {
  return (
    <main>
      <h1 className="">Choose one of the following Options</h1>
      <div className="landingPage">
        <Link className="CJGroup" href="/create">Create Group</Link>
        <Link className="CJGroup" href="/join">Join Group</Link>
        </div>
    </main>
  )
}
