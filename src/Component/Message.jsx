import "./Message.css";
const Message = ({ message }) => {
  return (
    <p className="message">
      <span>👋</span>
      {message}
    </p>
  );
};

export default Message;
