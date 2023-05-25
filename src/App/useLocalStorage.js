import React from "react";
import { useState } from "react";

function useLocalStoragexD(itemName, initialValue){
  

    const localStorageItem = localStorage.getItem(itemName);
  
    let parsedItem;
  
    if (!localStorageItem){
      localStorage.setItem(itemName,JSON.stringify(initialValue));
      parsedItem=initialValue;
    }else{
      parsedItem = JSON.parse(localStorageItem)
    }
  
    const [item, setItem] = useState(parsedItem);
  
    const saveItem = (nuevosItem) =>{
      localStorage.setItem(itemName,JSON.stringify(nuevosItem));
      setItem(nuevosItem)
    };
  
    return [item,saveItem];
  
  }

export {useLocalStoragexD}