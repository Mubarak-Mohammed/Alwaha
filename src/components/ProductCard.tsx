import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price">{product.price} الف ج.س</div>
        <button className="add-to-cart" onClick={() => onAddToCart(product)}>
          إضافة إلى السلة
        </button>
      </div>
    </div>
  );
};

export default ProductCard;