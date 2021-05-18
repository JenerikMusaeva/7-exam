import { useContext } from "react";
import { AppContext } from "../App";


export default function Currency({handleCurrencyChange}) {

  let { currency } = useContext(AppContext);

  return (
    
      <select className="currency" onChange={handleCurrencyChange} value={currency.selected}>
        {Object.keys(currency.currencyList).map((curren) => {
          return <option value={curren}>{curren}</option>;
        })}
      </select>
    
  );
}
