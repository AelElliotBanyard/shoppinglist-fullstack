import Link from 'next/link'

export default function Home({ params }) {
  return (
    <main>
      <h1 className="">Choose one of the following Options</h1>
      <div className="landingPage">
        <Link className="createGroup" href="/create">Create Group</Link>
        <Link className="joinGroup" href="/join">Join Group</Link>
        </div>
    </main>
  )
}
