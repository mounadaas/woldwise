import { useNavigate } from "react-router-dom";

const ButtonBack = () => {
  const navigate = useNavigate();
  return (
    <button
      className="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      {" "}
      &larr; back
    </button>
  );
};

export default ButtonBack;
