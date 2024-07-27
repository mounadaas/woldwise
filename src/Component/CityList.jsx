import { useCeties } from "../Contexts/CetiesContext";
import CityItem from "./CityItem";
import Message from "./Message";
import Spinner from "./Spinner";
import "./CityList.css";

const CityList = () => {
  const { ceties, isLoading } = useCeties();
  if (isLoading) return <Spinner />;
  if (!ceties.length)
    return (
      <Message message="add your first city by clicking on a city on the map" />
    );
  return (
    <ul className="CityListitem">
      {ceties.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CityList;
