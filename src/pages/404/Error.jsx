import { Link } from 'react-router';
import '../../components/button/Button.css';
import './Error.css';

// pagina que se muestra cuando la ruta no existe
const ErrorPage = () => {
  return (
    <main className="error-page">
      <p className="error-page-code" aria-hidden="true">
        404
      </p>
      <h1 className="error-page-title">Page not found</h1>
      <p className="error-page-text">
        Sorry, the page you are looking for doesn't exist or was moved.
      </p>
      {/* es un link (navega a otra pagina) pero con los estilos del Button */}
      <Link to="/" className="btn btn--primary btn--lg">
        Back to home
      </Link>
    </main>
  );
};

export default ErrorPage;
