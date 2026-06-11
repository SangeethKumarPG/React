import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice.js";
import { useDispatch, useSelector } from "react-redux";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.totalQuantity);
  const toggleCartHandle = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandle}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartCount}</span>
    </button>
  );
};

export default CartButton;
