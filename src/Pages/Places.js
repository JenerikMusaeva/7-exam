import { useEffect, useReducer } from "react";
import placesReducer from '../reducers/placesReducers'
import Place from '../components/Place'


export default function Places() {

  // let [ loading, setLoading ] = useState(true)

  let [ {places, loading}, dispatch] = useReducer(placesReducer, {
    places: [],
    loading: true,
  });

  useEffect(() => {
    fetch("http://localhost:1717/eats/places/")
      .then((r) => r.json())
      .then((data) => {
        dispatch({type: 'SET_PLACES', payload: data });
      });
  }, []);

  console.log(places)

  return (
    <>
      {loading ? (
        <div> Loading</div>
      ) : (
        <div className="places">
          {places.map((place) => (
            <Place data={place} />
          ))}
        </div>
      )}

    </>
  );
}
