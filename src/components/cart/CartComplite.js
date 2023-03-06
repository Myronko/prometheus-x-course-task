import { useContext } from "react";
import { BooksContext } from "../../hooks/use-books";
import cartImg from "../header/cart.svg"; 
import "./cart-complite.css"; 

export const CartComplite = () => {
  const { books, cart, setCart } = useContext(BooksContext);
  const cartData = cart?.map((cartItem) => ({
    ...cartItem,
    ...books.find((bookItem) => bookItem.id === cartItem.id),
  }));

  return (
    <>
      <section className="cart-main">
        {cartData?.length ? (
          <>
            <div className="cart-empty">
                <button
                    type="button"
                    className="cart-button"
                    onClick={() => setCart([])}
                >
                Purchase
                </button>
            </div>
            <div className="cart-list">
              {cartData.map((cartItem) => (
                <div className="cart-list-book" key={cartItem.id}>
                  <span>{cartItem.title}</span>
                  <span className="cart-count">{cartItem.count}</span>
                  <span>{cartItem.price * cartItem.count}</span>
                </div>
              ))}
            </div>
            <div className="sum">
              <p>
                Total price, ${" "}
                <span>
                  {cartData.reduce(
                    (acc, item) => acc + item.price * item.count, 0)}
                </span>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="cart-empty">
              <button
                type="button"
                className="cart-button"
                disabled
              >
              Purchase
              </button>
            </div>
            <div className="cart">
              <img src={cartImg} width="100px" height="100px" alt="" />
              <p>Cart empty ...</p> 
            </div>    
          </>                
        )}
      </section>
    </>
  );
};

