import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Product.css';

const Product = ({ product }) => {
  const { t } = useTranslation();
  const { id, price } = product;

  const name = t(`singleProduct.products.${id}.name`);
  const productImage = `/pics/pic${id}.webp`;

  return (
    <div className="product">
      <Link to={`/product/${id}`} className='link'>
        <div className="image-container">
          <img src={productImage} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{t('product.price')}: {price}fr</p>
      </Link>
    </div>
  );
};

export default Product;
