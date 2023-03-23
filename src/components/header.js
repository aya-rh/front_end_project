import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-image">
        <img
          src="https://i.imgur.com/ndHI0kq.gif"
          alt="logo image"
          height="120"
        />
      </div>

      <div id="nav-container">
        <div className="header-nav">
          <Link to="/Home">Home</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Sellers">Sellers</Link>
          <Link to="/Subscribers">Subscribers</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Cart">Cart</Link>
        </div>

        <div>
          <input type="search" placeholder="Search" />
        </div>
      </div>

    </div>
  );
};

export default Header;
