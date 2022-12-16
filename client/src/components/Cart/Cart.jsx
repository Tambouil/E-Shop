import { AiFillDelete } from 'react-icons/ai';
import './Cart.scss';

const Cart = () => {
  const data = [
    {
      id: 1,
      title: 'Product 1',
      img: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      price: 50,
    },
    {
      id: 2,
      title: 'Product 2',
      img: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      price: 30,
    },
  ];

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h2>{item.title}</h2>
            <p>{item.description.substring(0, 100)}...</p>
            <div className="price">
              <span>${item.price}</span>
            </div>
          </div>
          <AiFillDelete className="delete" />
        </div>
      ))}
    </div>
  );
};

export default Cart;
