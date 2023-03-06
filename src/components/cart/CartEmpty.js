import cartImg from '../header/cart.svg';
import "./cart-empty.css"; 
export const CartEmpty = () => {
    
    return(
        <>
            
            <section className="cart-main">
                <div className="cart-empty">
                    <button
                        type="button"
                        className="cart-button"
                        disabled="">
                        Purchase
                    </button>
                </div>
                <div className="cart">
                   <img src={cartImg} width="100px" height="100px" alt="" />
                   <p>Cart empty ...</p> 
                </div>
            </section>
        </>
    )
}