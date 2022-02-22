import React, { useState, useEffect } from "react";

//The main Api
import Api from "../services/Api";

export const ProductsContext = React.createContext()
//The createContext helps us to use a component from another component immediately without using props

const ProductContextProvider = ({children}) => {
  const [products, setProducts] = useState([]);
 //I can use [] => (an empty array) , because the data that will be fetched from Api are array of objects
 //props can be removed and replaced by just children with destructuring => {children} instead of (props.children)

  useEffect(() => {
    const fetchApi = async () => {
        setProducts(await Api())
       //FetchApi uses the main Api to get products and because the the main Api is using async await
       // we should use the async await for fetchApi too

       //setProducts will also wait for Api to call data and then will call it when everything is gathered
    };
     fetchApi()
  }, []);
 //Dependency => [] will cause the data to fetch just one time from Api

  return (
     <>
     <ProductsContext.Provider value={products}>
         {children}
     </ProductsContext.Provider>
     </>
   //By using this Provider we can actually use the products and wrap it anywhere we need in any component
   //The usage of children is that we can access and use anything inside of the ProductContextProvider function
  );
};

export default ProductContextProvider;
