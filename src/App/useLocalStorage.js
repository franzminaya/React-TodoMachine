import { useState } from "react";
import { useEffect } from "react";

function useLocalStoragexD(itemName, initialValue){
  
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [sincronizedItem, setSincronizedItem] = useState(true);

    

    useEffect(()=>{
     setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if (!localStorageItem){
          localStorage.setItem(itemName,JSON.stringify(initialValue));
          parsedItem=initialValue;
        }else{
          parsedItem = JSON.parse(localStorageItem)
          
        }
        setItem (parsedItem);
        setLoading(false);
        setSincronizedItem(true);
      }catch(error){
        setLoading(false)
        setError(true)
      }
     }, 3000);
   
    },[sincronizedItem])
  
  
    const saveItem = (nuevosItem) =>{
      localStorage.setItem(itemName,JSON.stringify(nuevosItem));
      setItem(nuevosItem)
    };


    const sincronize = () =>{
      setLoading(true);
      setSincronizedItem(false)
    }
  
    return {item,saveItem,loading,error,sincronize};
  
  }

export {useLocalStoragexD}

/* const defaultTodos =[
  {text:"Aprender React default",completada:false},
  {text:"Aprender NextJs default",completada:false},
  {text:"Hacer lo de DHM default",completada:false},
  {text:"Conseguir Trabajo en Julio",completada:false}
]; 
  localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos)) */