import Map from "../Component/Map";
import Sidbar from "../Component/Sidbar";
import User from "../Component/User";
import "./AppLayout.css";

const AppLayout = () => {
  return (
    <div className="app">
      <Sidbar />
      <Map />
      <User />
    </div>
  );
};

export default AppLayout;
