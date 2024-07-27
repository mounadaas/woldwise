const CountryItem = ({ country }) => {
  return (
    <li className="CityList">
      <span className="emojicountry">{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
};

export default CountryItem;
