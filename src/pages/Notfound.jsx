import { Link } from "react-router-dom";
import "./Notfound.css";
const Notfound = () => {
  return (
    <section className="found">
      <div className="notfound">
        <h1>Oops!</h1>
        <h2>
          <span>404</span> - PAGE NOT FOUND
        </h2>
        <p>
          The page you are looking for might have been removed had its name
          changed or is tempotrarily unavailable.
        </p>
        <Link to="/" className="cta">
          GO TO HOMEPAGE
        </Link>
      </div>
    </section>
  );
};

export default Notfound;
