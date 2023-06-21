import Link from 'next/link'

export default function Home({ params }) {
  return (
    <main>
      <div className="landingPage">
        <Link className="createGroup" href="/create">Create Group</Link>
        <Link className="joinGroup" href="/join">Join Group</Link>
        </div>
    </main>
  )
}
