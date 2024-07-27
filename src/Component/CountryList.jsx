import { useCeties } from "../Contexts/CetiesContext";
import CountryItem from "./CountryItem";
import Message from "./Message";
import Spinner from "./Spinner";
import "./CountryList.css";

const CountryList = () => {
  const { ceties, isLoading } = useCeties();
  if (isLoading) return <Spinner />;
  if (!ceties.length)
    return (
      <Message message="add your first city by clicking on a city on the map" />
    );
  const countries = ceties.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <ul className="CountryList">
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
};

export default CountryList;
