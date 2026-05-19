import Button from "./UI/Button.jsx";
import logoImg from "../assets/logo.jpg";
import { useContext } from "react";
import CartContext from "../store/cartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);
  function handleShowCart() {
    userProgressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo image" />
        <h1>Food Order App</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
