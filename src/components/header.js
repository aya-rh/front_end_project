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
          <a href="#Home">Home</a>
          <a href="#Contact">Contact</a>
          <a href="#Sellers">Sellers</a>
          <a href="#Subscribers">Subscribers</a>
          <a href="#Login">Login</a>
          <a href="#Cart">Cart</a>
        </div>

        <div>
          <input type="search" placeholder="Search" />
        </div>
      </div>

    </div>
  );
};

export default Header;
