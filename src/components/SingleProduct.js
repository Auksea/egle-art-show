import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './SingleProduct.css';

const SingleProduct = ({ products, addToCart, cart, handleCheckout, removeFromCart }) => {
  const { t } = useTranslation();
  const { id } = useParams();

  if (!products || products.length === 0) {
    return <div>{t('singleProduct.loading')}</div>;
  }

  const product = products.find((product) => product.id === parseInt(id, 10));

  if (!product) {
    return <div>{t('singleProduct.productNotFound')}</div>;
  }

  const name = t(`singleProduct.products.${id}.name`);
  const description = t(`singleProduct.products.${id}.description`);
  const materials = t(`singleProduct.products.${id}.materials`);
  const { price } = product;
  const productImage = `/pics/pic${id}.webp`;

  const descriptionLines = description.split('\n');

  return (
    <div>
      <div className="product-container">
        <div className="product-details">
          <h2>{name}</h2>
          <hr className="decorative-line-productDetails" />
          <p className='firstParagraph'>
            {t('singleProduct.price')}: {price}fr <br/>
          </p>

          <p className='secondParagraph'>
            ({t('singleProduct.priceNote')})
          </p>

          {materials && (
            <p>
              {materials}
            </p>
          )}

          {descriptionLines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}

        </div>
        <div className="product-image">
          <img src={productImage} alt={name} />
        </div>
      </div>
    </div>
  );
};


export default SingleProduct;



