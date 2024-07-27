import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
import "./Pricing.css";
const Pricing = () => {
  return (
    <main className="pricing ">
      <Navbar />
      <section>
        <div className="info">
          <h1>
            Simple pricing. <br /> Just $9 / month.
          </h1>
          <p>
            Track your journeys on our interactive world map and share your
            adventures with fellow travelers. Upgrade to premium for advanced
            features like in-depth travel stats and exclusive community access.
          </p>
          <Link to="/login" className="cta">
            start tracking now
          </Link>
        </div>
        <div className="image">
          {" "}
          <img
            src="full-shot-adventurous-man-bivouacking.jpg"
            alt="men travel"
          />{" "}
        </div>
      </section>
    </main>
  );
};

export default Pricing;
