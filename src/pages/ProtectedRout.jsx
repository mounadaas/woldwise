import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/fakeAuthContext";
import { useEffect } from "react";

const ProtectedRout = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
};

export default ProtectedRout;
