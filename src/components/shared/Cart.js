import React, { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import { shorten } from "../../supporter/supportiveFunctions";
import trashIcon from "../../assets/icons/trash.svg";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const { dispatch } = useContext(CartContext);

  const { image, title, price, quantity } = props.data;
  return (
    <div className={styles.container}>
      <img className={styles.productImage} src={image} alt="product" />
      <div className={styles.data}>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <div>
        <span className={styles.quantity}>{quantity}</span>
      </div>
      <div className={styles.buttonContainer}>
        {quantity > 1 ? (
          <button
            onClick={() => dispatch({ type: "Decrease", payload: props.data })}
          >
            -
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({ type: "RemoveItem", payload: props.data })
            }
          >
            <img src={trashIcon} alt = 'trash'/>
          </button>
        )}
        <button onClick={() => dispatch({ type : 'Increase' , payload : props.data})}>+</button>
      </div>
    </div>
  );
};

export default Cart;
