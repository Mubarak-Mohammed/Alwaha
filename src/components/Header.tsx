import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">متجر الواحة</div>
          <ul className="nav-links">
            <li><Link to="/">الرئيسية</Link></li>
            <li><Link to="/products">المنتجات</Link></li>
            <li><Link to="/contact">اتصل بنا</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;