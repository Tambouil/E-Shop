import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineDown, AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import './Navbar.scss';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <span>🇺🇸 EN</span>
            <AiOutlineDown />
          </div>
          <div className="item">
            <span>USD</span>
            <AiOutlineDown />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            E-SHOP
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <AiOutlineSearch />
            <AiOutlineUser />
            <AiOutlineHeart />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <AiOutlineShoppingCart />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
