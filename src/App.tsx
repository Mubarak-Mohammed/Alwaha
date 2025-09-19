import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import type { Product } from './data/products';
import ProductsPage from './pages/ProductsPage';

function App() {
  const [cart, setCart] = useState<Product[]>([]);
  
  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    alert('تمت إضافة المنتج إلى السلة');
  };
  
  const clearCart = () => {
    setCart([]);
  };
  
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/products" 
            element={<ProductsPage onAddToCart={addToCart} />} 
          />
          <Route path="/contact" element={<Contact />} />
          <Route 
            path="/checkout" 
            element={<Checkout cart={cart} onClearCart={clearCart} />} 
          />
        </Routes>
        <footer>
          <div className="container">
            <p>© 2023 متجر الواحة. جميع الحقوق محفوظة.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;