import { useContext, useState } from "react";
import { Link } from "react-router-dom"; 
import { BooksContext } from "../../hooks/use-books";
import imageNotFound from "./imageNotFound.png";
import "./book-list.css";
export const BookList = () => {
    const [search, setSearch] = useState('');
    const [price, setPrice] = useState('');
    const { books } = useContext(BooksContext);
    const bookData = books.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()));    
    const priceData = bookData.filter((book) => {
        if (price === "" || price === "all") return true;
        if (price === "15" && book.price < 15) return true;
        if (price === "30" && book.price < 30) return true;
        if (price === "30+" && book.price > 30) return true;
        return false;       
    });
    return(
        <>           
            <section className="search-books">
                <div className="search">
                    <input 
                        type="search" 
                        placeholder="Search by book name" 
                        className="search-book"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <select
                        className="search-price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}                   
                    >
                        <option disabled hidden value={""}>Price</option>
                        <option value='all'>Всі</option>
                        <option value='15'>{'< 15'} </option>
                        <option value='30'>{'< 30'}</option>
                        <option value='30+'>{'30 +'}</option>
                    </select>              
                </div>
                <div className="book-names">
                    {priceData.map((book) => {
                 return <div className="book-name" >
                            <div className="book" key={book.id}>
                                <img 
                                    src={book.image ? book.image : imageNotFound} 
                                    className="book-img" 
                                    alt={book.title}
                                />
                                <p><b>{book.title.length > 24 ? book.title.slice(0,24) + '...' : book.title}</b></p>
                         
                                <p>{book.author}</p>
                                <div className="book-footer">
                                    <p><b>{book.price}</b></p>
                                    <Link to={`/specific-book/${book.id}`}>
                                      <button
                                        type="button"
                                        className="book-button"
                                      >
                                      View
                                      </button>
                                    </Link>                                       
                                </div>
                            </div>
                       </div>
                    })
                }               
                </div>
            </section>  
        </>
    )
}