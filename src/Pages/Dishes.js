import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";
import Dish from "../components/Dish";

export default function Dishes({ dishes, updateDishes }) {
  let { placeid } = useParams();

  let [loading, setLoading] = useState(true);

  let { currency } = useContext(AppContext);

  let currencyValue = currency.currencyList[currency.selected];

  useEffect(() => {
    fetch("http://localhost:1717/eats/dishes/" + placeid)
      .then((r) => r.json())
      .then((data) => {
        updateDishes(data);
        setLoading(false);
      });
  }, []);

  return (
    <>

      {loading ? (
        <div> Loading </div>
      ) : (
        <div className="dishes">
          {dishes.map((dish) => (
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
  );
}
