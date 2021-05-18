import { useContext } from "react";
import { AppContext } from "../App";

export default function CheckOut({ data, removeFromCart }) {
  let { currency } = useContext(AppContext);

  let currencyValue = currency.currencyList[currency.selected];

  return (
    <div className="checkout">
      <h3>Check Out</h3>

      {!!data.dishes.length ? (
        <div className="cart_items">
          {data.dishes.map((dish) => {
            return (
              <div className="checkout_item">
                <div className="dish-img-box">
                  <img className="dish-img " src={dish.img} />
                </div>
                <div className="checkout_name">{dish.name}</div>
                <div className="checkout_price">
                  {dish.quantity} x ({dish.price * currencyValue}{" "}
                  {currency.selected}) ={" "}
                  {dish.price * currencyValue * dish.quantity}{" "}
                  {currency.selected}
                </div>
                <button
                  onClick={() => {
                    removeFromCart(dish.id);
                  }}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <h3>Cart is empty!</h3>
      )}
    </div>
  );
}
