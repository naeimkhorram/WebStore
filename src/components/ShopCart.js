import React, { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";
import Cart from "./shared/Cart";
import {Link} from 'react-router-dom'
import styles from "./ShopCart.module.css";

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      {
        state.itemCounter > 0 && <div className={styles.payments}>
          <p><span>Total items : </span>{state.itemCounter}</p>
          <p><span>Total price : </span>{state.total} $</p>
          <div className={styles.buttonContainer}>
            <button className={styles.clear} onClick ={() => dispatch({type : 'CheckOut'})}>CheckOut</button>
            <button className={styles.checkout} onClick ={() => dispatch({type : 'Clear'})}>Clear</button>
          </div>
        </div>
      }

      {
        state.checkout && <div className={styles.complete}>
          <h3>Checked out successfully</h3>
          <Link to = '/products'>Buy more</Link>
        </div> 
      }

      {
       state.itemCounter === 0 && !state.checkout && <div className={styles.complete}>
       <h3>Cart is empty</h3>
       <Link to = '/products'>Go to shop</Link>
     </div> 
      }

    </div>
  );
};

export default ShopCart;
