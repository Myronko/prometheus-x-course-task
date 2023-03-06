import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { BookList } from "./components/book-list/BookList";
import { Signin } from "./components/signin/Signin";
import { SpecificBook } from "./components/specific-book/SpecificBook";
import { CartComplite } from "./components/cart/CartComplite";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { NotFound } from "./components/not-found/NotFound";
import books from "./books.json";
import { BooksContext } from "./hooks/use-books";

export default function App() {
  const [cart, setCart] = useState([]);
  const userName = window.localStorage.getItem('userName');

  return (
    <BooksContext.Provider value={{
      books,
      cart,
      setCart,
    }}>
      <Header />
        <Routes>
          {userName ? (
            <>
              <Route index element={<BookList />} />
              <Route path="/specific-book/:id" element={<SpecificBook/>} />
              <Route path="/cart-complite" element={<CartComplite/>} />
            </>
          ) : <Route index element={<Signin />} />}
          <Route path="*" element={<NotFound/>} />
        </Routes>
      <Footer/>
    </BooksContext.Provider>
  );
}


