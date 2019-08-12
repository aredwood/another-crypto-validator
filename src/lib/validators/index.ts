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
//@ts-ignore
import ltcRegex from "litecoin-regex";

//@ts-ignore
import coinaAddressValidator from "coin-address-validator";

import { ICurrency } from "../../types";
//@ts-ignore
import {validate as multicoin} from "crypto-wallet-address-validator";

interface IValidator{
    (address:string,tag?:string) : boolean
}

let validators : {
    [key:string] : IValidator
}= {};

validators['BTC'] =  (address:string) : boolean => {
    const res = bitcoinRegex({
        exact:true
    }).test(address) as boolean;

    return res;
}

validators['ETH'] = (address:string) : boolean => {
    const res = ethRegex({
        exact:true
    }).test(address) as boolean;
    
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
    const addressValid = xrpRegex({
        exact:true
    }).test(address)
    if(!tag){
        tag = "";
    }
    const tagValid = tag.length > 0;

    return addressValid && tagValid
}

validators['BCH'] = (address:string) : boolean => {
    const res = bchRegex({
        exact:true
    }).test(address) as boolean;
    return res;
}

validators['LTC'] = (address:string) : boolean => {
    const res = ltcRegex({
        exact:true
    }).test(address) as boolean;
    return res;
}

validators['DASH'] = (address:string) : boolean => {
    // const length = address.length > 0;
    // const exp = /[A-Za-z1-9]/;

    // let validChar = true;
    // address.split("").forEach(character => {
    //     if(!exp.test(character)){
    //         validChar = false;
    //     }
    // });

    // return length && validChar;

    const res = dashRegex({exact:true}).test(address) as boolean;

    return res;

}



export default validators;

