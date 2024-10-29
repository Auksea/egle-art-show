import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import NavBar from './components/Header';
import Footer from './components/Footer1';
import Home from './components/Home';
import Store from './components/Store';
import Contact from './components/Contact';
import SingleProduct from './components/SingleProduct';
import products from './components/productsData';
import translationEN from './locales/en.json';
import translationFR from './locales/fr.json';
import translationLT from './locales/lt.json';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log('Adding to Cart:', product);
    setCart((prevCart) => [...prevCart, { ...product }]);
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter(item => item.id !== itemToRemove.id);
    setCart(updatedCart);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/store"
              element={<Store products={products} addToCart={addToCart} cart={cart} setCart={setCart} removeFromCart={removeFromCart} />}
            />
            <Route
              path="/product/:id"
              element={<SingleProduct products={products} addToCart={addToCart} cart={cart} setCart={setCart} removeFromCart={removeFromCart} />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>
  );
}
i18n.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: { translation: translationEN },
    fr: { translation: translationFR },
    lt: { translation: translationLT }
  }
});

export default App;
