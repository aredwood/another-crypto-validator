import {ICurrency} from "../types";

const knownCurrencies : ICurrency[] = [
    {
        symbol:"ETH",
    },
    {
        symbol:"BTC"
    },
    {
        symbol:"EOS",
        requiresTag:true
    },
    {
        symbol:"XRP",
        requiresTag:true
    }
]


export default knownCurrencies