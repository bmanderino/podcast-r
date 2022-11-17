import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Podcasts from '../data/podcasts.json'

const Home = () => {
  const [podcasts, setPodcasts] = useState([])
  useEffect(() => {
    setPodcasts(Podcasts.Podcasts)
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <main>
        {podcasts.map((pod, index) => (
          <p key={index}>
            <Link
              to={`/shows/${pod.id}`}
              state={{ feed: pod.feed, name: pod.title }}
            >
              {pod.title}
            </Link>
          </p>
        ))}
      </main>
    </div>
  )
}

export default Home
