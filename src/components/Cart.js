import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Cart({ data, removeFromCart, openCart, toggleCart }) {
  let { currency } = useContext(AppContext);

  let currencyValue = currency.currencyList[currency.selected];

  return (
    <div className={`cart ${openCart ? "open" : ""}`}>
      <button className="btn_close_cart" onClick={toggleCart}>
        &#10006;
      </button>
      {!!data.dishes.length ? (
        <div className="cart_items">
          {data.dishes.map((dish) => {
            return (
              <div className="cart_item">
                <div>{dish.name}</div>
                <div>
                  {dish.quantity} x ({dish.price * currencyValue}
                  {currency.selected}) =
                  {dish.price * currencyValue * dish.quantity}
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

          <div className="total_price">
            Total price: {data.totalPrice}
          </div>

          <Link to="/checkout">
            <div className="btn_to_checkout">Check out</div>
          </Link>
        </div>
      ) : (
        <h3>Cart is empty!</h3>
      )}
    </div>
  );
}
