//@ts-ignore
import bitcoinRegex from "bitcoin-regex";
//@ts-ignore
import ethRegex from "ethereum-regex"
//@ts-ignore
import xrpRegex from "ripple-regex";
//@ts-ignore
import bchRegex from "bitcoincash-regex";
//@ts-ignore
import dashRegex from "dash-regex"

import { ICurrency } from "../../types";

interface IValidator{
    (address:string,tag?:string) : boolean
}

let validators : {
    [key:string] : IValidator
}= {};

validators['BTC'] =  (address:string) : boolean => {
    const res = bitcoinRegex().test(address) as boolean;

    return res;
}

validators['ETH'] = (address:string) : boolean => {
    const res = ethRegex().test(address) as boolean;
    
    return res;
}

validators['EOS'] = (address:string,tag?:string) : boolean => {
    const addressValid = address.toLowerCase() === address && address.length === 12

    if(!tag){
        tag = "";
    }
    const tagValid = tag.length > 0;

    return addressValid && tagValid
}


validators['XRP'] = (address:string,tag?:string) : boolean => {
    const addressValid = xrpRegex().test(address)
    if(!tag){
        tag = "";
    }
    const tagValid = tag.length > 0;

    return addressValid && tagValid
}

validators['BCH'] = (address:string) : boolean => {
    const res = bchRegex().test(address) as boolean;
    return res;
}

validators['DASH'] = (address:string) : boolean => {
    
    const res = dashRegex().test(address) as boolean;
    return res;
}



export default validators;

