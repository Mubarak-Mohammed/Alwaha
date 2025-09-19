import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>أجمل تشكيلة من الملابس النسائية</h1>
          <p>اكتشفي أحدث صيحات الموضة في عبايات وفساتين</p>
          <Link to="/products" className="btn">تسوق الآن</Link>
        </div>
      </section>

      <section className="products-section">
        <div className="container">
          <h2 className="section-title">منتجاتنا المميزة</h2>
          <div className="products-grid">
            {/* This would be populated with featured products in a real app */}
            <div style={{textAlign: 'center', padding: '2rem'}}>
              <p>تشكيلة مميزة من العبايات والفساتين بأجود الخامات وأحدث التصاميم</p>
              <Link to="/products" className="btn" style={{marginTop: '1rem'}}>استعرض المنتجات</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;