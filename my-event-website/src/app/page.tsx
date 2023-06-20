import React from 'react'
import Link from 'next/link'
import EventCard from '../components/event_card'

export default function Home() {
  return (
    <div>
      <header>
        <h1>Text to Display</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about-us">About us</Link>
          <Link href="/events">Events</Link>
        </nav>
      </header>
      <main>
          <EventCard link="/"></EventCard>
          <EventCard link="/"></EventCard>
          <EventCard link="/"></EventCard>
      </main>
      <footer>
        <h3> &copy; Intro coding project by Joshua Beed 2023 </h3>
      </footer>
    </div>
   
  )
}
