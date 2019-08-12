import {ICurrency} from "../types";

const knownCurrencies : ICurrency[] = [
    {
        symbol:"ETH",
    },
    {
        symbol:"BTC"
    },
    {
        symbol:"BCH"
    },
    {
        symbol:"EOS",
        requiresTag:true
    },
    {
        symbol:"XRP",
        requiresTag:true
    },
    {
        symbol:"DASH"
    },
    
]


export default knownCurrencies