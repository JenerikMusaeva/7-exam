import React, { useState, useReducer, useContext, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Places from "./Pages/Places";
import Dishes from "./Pages/Dishes";
import CheckOut from "./Pages/CheckOut";
import cartReducer from "./reducers/cartReducer";
import dishesReducer from "./reducers/dishesReducer";
import currencyReducer from "./reducers/currencyReducer";

import "./Style.css";

export let AppContext = createContext(null);

function App() {
  let [openCart, setOpenCart] = useState(false);
  let toggleCart = () => setOpenCart(!openCart);

  let [cart, cartDispatch] = useReducer(cartReducer, {
    dishes: [],
  });

  let [currency, currencyDispatch] = useReducer(currencyReducer, {
    selected: "kgs",
    currencyList: {
      kgs: 1,
      usd: 0.012,
      kzt: 5.04,
    },
  });

  let handleCurrencyChange = (e) => {
    currencyDispatch({ type: "SET_CURRENCY", payload: e.target.value });
  };

  let [{ dishes }, dishesDispatch] = useReducer(dishesReducer, {
    dishes: [],
  });

  let updateDishes = (data) => {
    dishesDispatch({ type: "SET_DISHES", payload: data });
  };

  let addToCart = (id) => {
    let selectedDish = dishes.filter((dish) => dish.id === id);

    cartDispatch({
      type: "ADD_TO_CART",
      dish: selectedDish[0],
    });
  };

  let removeFromCart = (id) => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };

  let defaultValues = {
    currency,
    addToCart,
  };

  return (
    <AppContext.Provider value={defaultValues}>
      <Router>
        <Header
          toggleCart={toggleCart}
          handleCurrencyChange={handleCurrencyChange}
        />

        <Cart
          data={cart}
          removeFromCart={removeFromCart}
          setOpenCart={setOpenCart}
          openCart={openCart}
          toggleCart={toggleCart}
        />

        <div className="content">
          <Switch>
            <Route path="/checkout" exact>
              <CheckOut data={cart} removeFromCart={removeFromCart} />
            </Route>
            <Route path="/dishes/:placeid">
              <Dishes dishes={dishes} updateDishes={updateDishes} />
            </Route>
            <Route path="/" exact component={Places} />
          </Switch>
        </div>

        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
