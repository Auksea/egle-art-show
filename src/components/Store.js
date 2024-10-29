import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Product from './Product';
import products from './productsData';
import './Store.css';

const Store = ({ addToCart, cart, handleCheckout, removeFromCart }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="store">
        <h1 className='headingStore'>{t('store.title')}</h1>
        <hr className="decorative-line-store" />
        </div>
        <div className="products">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className='link'>
              <Product product={product} addToCart={addToCart} />
            </Link>
          ))}
        </div>
      </div>
  );
};

export default Store;