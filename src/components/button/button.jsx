import "./button.scss";

export const Button = ({
  children,
  color = "primary",
  outline = "none",
  border = "default",
  className = "",
}) => {
  const classNames = ["btn", className, color, outline, border].join(" ");

  return <button className={classNames}>{children}</button>;
};
