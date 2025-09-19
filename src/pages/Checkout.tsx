import { useState } from 'react';
import type { Product } from '../data/products';


interface CheckoutProps {
  cart: Product[];
  onClearCart: () => void;
}

const Checkout = ({ cart, onClearCart }: CheckoutProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  
  const total = cart.reduce((sum, product) => sum + product.price, 0);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `الاسم: ${name}%0Aالهاتف: ${phone}%0Aالعنوان: ${address}%0A%0Aالمنتجات:%0A${cart.map(item => `- ${item.name}: ${item.price}  الف ج.س`).join('%0A')}%0A%0Aالمجموع: ${total}  الف ج.س`;
    
    // Redirect to WhatsApp
    window.location.href = `https://wa.me/249127993961?text=${message}`;
    
    // Clear cart
    onClearCart();
  };
  
  return (
    <div className="checkout-page">
      <div className="container">
        <h2 className="section-title">إتمام الطلب</h2>
        
        <div className="checkout-form">
          <h3 style={{marginBottom: '1.5rem', textAlign: 'center'}}>تفاصيل الطلب</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>الاسم الكامل</label>
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label>رقم الهاتف</label>
              <input 
                type="tel" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label>العنوان</label>
              <textarea 
                rows={3} 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
                required 
              ></textarea>
            </div>
            
            <div style={{marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f9f6f2', borderRadius: '5px'}}>
              <h4>ملخص الطلب ({cart.length} منتج)</h4>
              <p>المجموع: {total}  الف ج.س</p>
            </div>
            
            <button type="submit" className="btn" style={{width: '100%'}}>
              إتمام الطلب عبر واتساب
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;