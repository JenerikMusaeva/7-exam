import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../App'
import Dish from '../components/Dish'

export default function Dishes({ places, dishes, updateDishes }) {
  let { placeid } = useParams()

  let [loading, setLoading] = useState(true)

  let { currency } = useContext(AppContext)

  let currencyValue = currency.currencyList[currency.selected]

  useEffect(() => {
    fetch('http://localhost:1717/eats/dishes/' + placeid)
      .then(r => r.json())
      .then(data => {
        updateDishes(data)
        setLoading(false)
      })
  }, [])

  let Place = places.find(place => place.id === placeid)

  return (
    <>
      <div className='place-banner'>
        <img className='place-img' src={Place.img} />
        
      </div><div className='welcome-banner__info'>
          <h1 className='welcome-banner__title'>{Place.name}</h1>
          <p className='welcome-banner__text'>
            <span className='kitchen'>{Place.cuisine}</span>
          </p>
        </div>

      {loading ? (
        <div> Loading </div>
      ) : (
        <div className='dishes'>
          {dishes.map(dish => (
            <Dish
              data={dish}
              currency={currency}
              currencyValue={currencyValue}
              currencyText={currency.selected}
            />
          ))}
        </div>
      )}
    </>
  )
}
