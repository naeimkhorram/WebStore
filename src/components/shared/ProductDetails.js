import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductContextProvider";
import { Link } from 'react-router-dom'
import styles from "./ProductDetails.module.css";

const ProductDetails = (props) => {
  const id = props.match.params.id;
  //This id and its params can be found in react developer tool and in this way we can clarify id in this component

  const data = useContext(ProductsContext);
  const product = data[id - 1];
  //In the array of objects we reduce the id of the array by 1 to reach the correct id of product in an array of object

  const { image, title, price, description, category } = product;
  //Destructuring can help to take what we need and then render them in return

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="image" />   
      <div className={styles.textContainer}>
      <h3>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.category}><span>Category : </span>{category}</p>
      <div className={styles.buttonContainer}>
          <span className={styles.price}>
              {price} $</span>
              <Link to='/product'>Back to shop</Link>         
          </div>
      </div>
    </div>
  );
};

export default ProductDetails;
