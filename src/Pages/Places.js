import { useEffect, useState } from 'react'
import Place from '../components/Place'

export default function Places({ setPlaces, places }) {
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:1717/eats/places/')
      .then(r => r.json())
      .then((data) => {
        setPlaces(data);
        setLoading(false);
      });
  }, [])

  return (
    <>
      {loading ? (
        <div> Loading</div>
      ) : (
        <div className='places'>
          {places.map(place => (
            <Place data={place} />
          ))}
        </div>
      )}
    </>
  )
}
