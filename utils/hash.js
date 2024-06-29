import CryptoJS from 'crypto-js';

  export function handleHash (input){
    const hash = CryptoJS.MD5(input).toString(CryptoJS.enc.Hex);
    return hash
  };