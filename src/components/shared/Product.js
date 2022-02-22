import React, { useContext } from "react";
import { Link } from "react-router-dom";
import trash from "../../assets/icons/trash.svg";
import styles from "./Product.module.css";

//Splitted title
import {
  shorten,
  existsInCart,
  quantityCountIndex,
} from "../../supporter/supportiveFunctions";

//Context
import { CartContext } from "../../context/CartContextProvider";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <img className={styles.cardImage} src={productData.image} alt="product" style={{ width: "200px" }} />
      <h3>{shorten(productData.title)}</h3>
      <p>{`${productData.price} $`}</p>
      <div className={styles.linkContainer}>
        <Link to={`products/${productData.id}`}>Details</Link>
        <div className={styles.buttonContainer}>
          {quantityCountIndex(state, productData.id) > 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "Decrease", payload: productData })
              }
              //When the item is bigger than 1 then the (+) will be (-)
            >
              -
            </button>
          )}
          {quantityCountIndex(state, productData.id) === 1 && (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "RemoveItem", payload: productData })
              }
              //When the item is equal to 1 then the Remove will appear
            >
              <img src={trash} alt="trashIcon" />
            </button>
          )}
          {quantityCountIndex(state, productData.id) > 0 && (
            <span className={styles.counter}>
              {quantityCountIndex(state, productData.id)}
            </span>
          )}
          {existsInCart(state, productData.id) ? (
            <button
              className={styles.smallButton}
              onClick={() =>
                dispatch({ type: "Increase", payload: productData })
              }
            >
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "AddItem", payload: productData })
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
