import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

export default function Episode() {
  const { id, episode } = useParams()
  const location = useLocation()

  return (
    <>
      <Link to={'/'}>Home</Link>
      <div>
        <h1>{location.state.title}</h1>
        <p>{location.state.description.$}</p>
        <audio controls="controls">
          <source
            src={location.state.enclosure['@url']}
            type={location.state.enclosure['@type']}
          />
        </audio>
      </div>
    </>
  )
}
