import React from "react";

function useLocalstorage (itemName, initialValue) {
    const [error, setError] = React.useState (false)
    const [loading, setLoading] = React.useState (true);
    const [Item, setItem] = React.useState(initialValue)
  
    React.useEffect (() => {
      setTimeout (() => {
        try{
          const localStorageItem = localStorage.getItem (itemName)
          let parsedItem
  
          if (!localStorageItem) {
            localStorage.setItem (itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem)
          }
  
          setItem(parsedItem)
          setLoading(false)
        } catch (error) {
          setError(error)
        }
      }, 1000);
    });
    
    const saveItem = (newItem) => {
      try {
        const stringifyedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifyedItem)
      setItem(newItem)
      } catch (error) {
        setError(error)
      }
    };
  
    return {
      Item,
      saveItem,
      loading,
      error,
    };  
  }

  export {useLocalstorage}