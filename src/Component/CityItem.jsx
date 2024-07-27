import { Link } from "react-router-dom";
import { useCeties } from "../Contexts/CetiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem = ({ city }) => {
  const { currentCity, deleteCity } = useCeties();
  const { emoji, cityName, date, id, position } = city;

  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <li>
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={`cityItem ${id === currentCity.id ? "active" : ""}`}
      >
        <div>
          <span className="emoji">{emoji}</span>
          <h3>{cityName}</h3>
        </div>
        <div>
          <time>({formatDate(date)})</time>
          <button onClick={handleClick}>&times;</button>
        </div>
      </Link>
    </li>
  );
};

export default CityItem;
