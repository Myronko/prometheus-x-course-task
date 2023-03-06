import { useContext, useMemo, useState } from "react"; 
import { useParams} from "react-router-dom";
import { BooksContext } from "../../hooks/use-books";
import imageNotFound from "../book-list/imageNotFound.png";
import "./specific-book.css";
export const SpecificBook = () => {
    const { id } = useParams();
    const { books, cart, setCart } = useContext(BooksContext);
    const book = books.find((item) => item.id === Number(id));
    const [count, setCount] = useState(1);
    const totalPrice = useMemo(() => count * book.price, [count, book.price]);
    
    return(
        <>            
            <section className="books" >                
                <div>
                    <img
                        src={book.image ? book.image : imageNotFound}
                        alt={book.title}
                        width='270px'
                    />
                </div>
                <div>
                    <p><b>{book.title}</b></p>
                    <p>{book.author }</p>
                    <p>Book level</p>
                    <p>Book tags,book tags,...</p>
                </div>
                <form action="">
                    <fieldset className="book-price">
                        <p><b>Price $,</b><span className="price">{book.price}</span></p>
                        <label for="count"><b>Count</b></label>
                        <input 
                            type="number" 
                            id="count" 
                            name="count" 
                            className="count" 
                            value={count}
                            onChange={(e) => {
                                if(!e.target.value  ) return setCount("");
                                if(e.target.value < 1 ) return setCount(1);
                                if(e.target.value > 42 ) return setCount(42);
                                setCount(e.target.value)
                            }}                        
                            />
                        <p>
                            <b>Total price</b>
                            <span
                                className="total-price">
                                {totalPrice}
                            </span>                            
                        </p>
                        <button
                            type="button"
                            className="book-cart"
                            onClick={() => {
                                if(cart.find(el => el.id === book.id)) {
                                    setCart(cart.map(item => item.id === book.id ? ({...item, count}) : item));
                                } else {
                                    setCart([...cart, {id: book.id, count}]);
                                }
                            }}
                        >
                            Add to cart
                        </button>                      
                    </fieldset>
                </form>
            </section>
            <footer className="description">
                <p>
                    <b>Description : </b>
                    {book.description}
                </p>
            </footer>        
        </>
    
    )
}