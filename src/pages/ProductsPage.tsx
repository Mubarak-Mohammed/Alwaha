import { useState } from 'react';
import { products } from '../data/products';
import type { Product } from '../data/products';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import { Link } from 'react-router-dom';

interface ProductsPageProps {
  onAddToCart: (product: Product) => void;
}

const ProductsPage = ({ onAddToCart }: ProductsPageProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = ['عبايات', 'فساتين'];
  
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;
  
  return (
    <div className="products-section">
      <div className="container">
        {/* Checkout button at the top */}
        <div style={{textAlign: 'center', margin: '2rem 0'}}>
          <Link to="/checkout" className="btn">الذهاب إلى السلة</Link>
        </div>

        <h2 className="section-title">منتجاتنا</h2>
        
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart} 
            />
          ))}
        </div>
        
        {/* Checkout button at the bottom */}
        <div style={{textAlign: 'center', marginTop: '3rem'}}>
          <Link to="/checkout" className="btn">الذهاب إلى السلة</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;