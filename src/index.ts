import determineCurrency from "./lib/determineCurrency";
import validators from "./lib/validators";
const validateAddress = (symbol:string,address:string,tag?:string) => {
    const currency = determineCurrency(symbol);

    if(currency.requiresTag && typeof tag === "undefined"){
        throw new Error("TAG_REQUIRED")
    }

    const thisValidator = validators[currency.symbol];


    const addressValid = thisValidator(address,tag);

    return addressValid



}

export default validateAddress