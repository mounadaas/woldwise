import Navbar from "../Component/Navbar";
import "./Product.css";
const Product = () => {
  return (
    <main className="product">
      <Navbar />
      <section>
        <div className="image">
          {" "}
          <img
            src="full-shot-adventurous-man-bivouacking.jpg"
            alt="men travel"
          />{" "}
        </div>
        <div className="info">
          <h1>About WorldWide</h1>
          <p>
            Have you ever dreamt of a map that remembers every corner of the
            world you have explored? We did too. That is why we created
            WorldWide, a revolutionary world map designed to capture your
            wanderlust and showcase your incredible journeys.
            <br />
            Forget the hassle of travel journals and fleeting memories. With
            WorldWide, you can effortlessly track your footsteps across the
            globe, marking every city that has captured your heart. From
            bustling metropolises to hidden gems, visualize your global
            adventures with an interactive map that grows with your experiences.
            More than just a map, WorldWide is a platform to connect with fellow
            explorers. Share your travel stories, discover hidden corners of the
            world recommended by others, and inspire your next adventure. Join
            our vibrant community and embark on a journey of rediscovery. Let
            the world be your canvas, and WorldWide your map to a life filled
            with exploration!
          </p>
        </div>
      </section>
    </main>
  );
};

export default Product;
