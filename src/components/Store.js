import React, { useContext } from "react";

//Component
import Product from './shared/Product'

//Context
import { ProductsContext } from "../context/ProductContextProvider";

import styles from "./Store.module.css";


const Store = () => {

    const products = useContext(ProductsContext)
    //We create a const to use useContext and then gather the information from ProductsContext

    return (
        <div className={styles.container}>
        {
          products.length ?
          products.map((product) => <Product key={product.id} productData = {product} />) :
          <p>Loading ...</p>
        }
        </div>
        //By mapping on products we can grab the information we want from it and render it in <Product />
    )
}

export default Store