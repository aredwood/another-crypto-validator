import knownCurrencies from "./knownCurrencies"
import { ICurrency } from "../types";

// allows us to specify some logic here for ERC
const determineCurrency = (symbol:string) : ICurrency => {
    // find is not fon
    //@ts-ignore
    const currency = knownCurrencies.find((element:ICurrency) => {
        return element.symbol === symbol;
    });

    if(typeof currency === "undefined"){
        const [ETH] = knownCurrencies.filter((currency:ICurrency) => {
            return currency.symbol === "ETH"
        });
        return ETH
    }
    else{
        return currency;
    }
}

export default determineCurrency;