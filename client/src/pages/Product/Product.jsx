import { useState } from 'react';
import { BsCartPlusFill } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import { FaBalanceScale } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './Product.scss';

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState('img');
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="product">
      {loading ? (
        'loading'
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={import.meta.env.VITE_STRAPI_BASE_URL + data?.attributes?.img?.data?.attributes?.url}
                alt=""
                onClick={(e) => setSelectedImg('img')}
              />
              <img
                src={import.meta.env.VITE_STRAPI_BASE_URL + data?.attributes?.img2?.data?.attributes?.url}
                alt=""
                onClick={(e) => setSelectedImg('img2')}
              />
            </div>
            <div className="mainImg">
              <img
                src={import.meta.env.VITE_STRAPI_BASE_URL + data?.attributes?.[selectedImg]?.data?.attributes?.url}
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button className="add">
              <BsCartPlusFill /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <MdFavoriteBorder /> ADD TO WISHLIST
              </div>
              <div className="item">
                <FaBalanceScale /> COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
