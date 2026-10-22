import { useLocation, useParams } from 'react-router';
import { ProductDetail } from '../../components/productDetail/ProductDetail';
import './Product.css';

export const Product = () => {
  const { id } = useParams();
  const path = useLocation()

// const isActive=   path.pathname === '/procuto '

  return (
    <main>
      {/* <Header /> */}
      <div className="product-page">
        {/* key={id}: al cambiar de producto se reinicia todo el estado */}
        <ProductDetail key={id} id={id} />
      </div>
    </main>
  );
};
