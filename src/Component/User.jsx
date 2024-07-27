import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/fakeAuthContext";
import "./User.css";
const User = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  function handelClick() {
    logout();
    navigate("/");
  }
  return (
    <div className="user">
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name} </span>
      <button onClick={handelClick}>LOGOUT</button>
    </div>
  );
};

export default User;
