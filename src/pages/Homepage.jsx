import { Link } from "react-router-dom";
import "./Homepage.css";
import Navbar from "../Component/Navbar";

const Homepage = () => {
  return (
    <main className="homepage">
      <Navbar />
      <section>
        <h1>
          You travel the world. <br /> Worldwise keeps track of your adventures.
        </h1>
        <h2>
          Aworld map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandred the world.
        </h2>
        <Link to="/login" className="cta">
          START TRACKUNG NOW
        </Link>
      </section>
    </main>
  );
};

export default Homepage;
