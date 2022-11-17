import React, { useEffect, useState } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { create } from 'xmlbuilder2'

const fetchData = async (url) => {
  const xmlFeed = await fetch(url).then((response) => response.text())
  let feed = create(xmlFeed).end({ format: 'object' })
  return feed
}

const formatData = (data) => {
  const formattedData = {
    title: data.title,
    description: data.description,
    episodes: data.item,
    image: data.image,
  }
  return formattedData
}

export default function Show() {
  const { id } = useParams()
  const location = useLocation()
  const [show, setShow] = useState()
  console.log('🚀 ~ file: Show.jsx ~ line 25 ~ Show ~ show', show)

  useEffect(() => {
    fetchData(location.state.feed).then((data) =>
      setShow(formatData(data.rss.channel))
    )
  }, [])
  if (show) {
    return (
      <>
        {' '}
        <Link to={'/'}>Home</Link>
        <div>
          <h1>{show.title}</h1>
          <p>{show.description}</p>
          <ul>
            {show.episodes.map((item, index) => (
              <li key={index}>
                <Link to={`episodes/${index}`} state={item}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Link to={'/'}>Home</Link>
        <h1>{location.state.name}</h1>
      </>
    )
  }
}
