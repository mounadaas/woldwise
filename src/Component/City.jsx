import { useParams } from "react-router-dom";
import ButtonBack from "./ButtonBack";
import "./City.css";
import { useCeties } from "../Contexts/CetiesContext";
import { useEffect } from "react";
import Spinner from "./Spinner";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

const City = () => {
  const { getCity, currentCity, isLoading } = useCeties();
  const { id } = useParams();

  useEffect(
    function () {
      getCity(id);
    },
    [id, getCity]
  );
  if (isLoading) return <Spinner />;
  const { cityName, emoji, date, notes } = currentCity;
  return (
    <div className="City">
      <div className="row">
        <h5>City name</h5>
        <h3>
          <span className="cityemoji">{emoji}</span> {cityName}
        </h3>
      </div>
      <div className="row">
        <h5>you went to {cityName} on </h5>
        <p>{formatDate(date || null)}</p>
      </div>
      {notes && (
        <div className="row">
          <h5>Your notes</h5>
          <p>{notes}</p>
        </div>
      )}
      <div className="row">
        <h5>Learn more</h5>
        <a
          className="wikipedia"
          href={`https://en.wikiprdia.org/wiki/${cityName}`}
          target="blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikupedia &rarr;
        </a>
      </div>
      <ButtonBack />
    </div>
  );
};

export default City;
