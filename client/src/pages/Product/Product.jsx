import { useState } from 'react';
import { BsCartPlusFill } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import { FaBalanceScale } from 'react-icons/fa';

import './Product.scss';

const Product = () => {
  const [selectedImg, setSelectedImg] = useState('img');
  const [quantity, setQuantity] = useState(1);

  const data = {
    id: 1,
    img: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
    img2: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Product 1',
    isNew: true,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    price: 50,
  };

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={data.img} alt="" onClick={(e) => setSelectedImg('img')} />
          <img src={data.img2} alt="" onClick={(e) => setSelectedImg('img2')} />
        </div>
        <div className="mainImg">
          <img src={data[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{data.title}</h1>
        <span className="price">${data.price}</span>
        <p>{data.desc}</p>
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
    </div>
  );
};

export default Product;
