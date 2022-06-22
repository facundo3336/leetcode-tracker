import "./button.scss";

export const Button = ({ children, color, outline, border }) => {
  return (
    <button
      className={`btn ${color !== undefined ? color : "primary"} ${
        outline !== undefined ? outline : "none"
      } ${border !== undefined ? border : "default"}`}
    >
      {children}
    </button>
  );
};
