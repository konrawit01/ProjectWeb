import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="brand">
        <button onclick="openMenu()">
          &#9776;
        </button>
        <Link to="/">HealthInfo</Link>
      </div>
      <div className="header-links">
        <a href="Cart.html">หมวดหมู่หนังสือ</a>
       <a href="signin.html">Sign In</a>
        <a href="login.html">Log in</a>
      </div>
    </header>
  );
}

export default Header;
