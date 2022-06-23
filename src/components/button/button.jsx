import "./button.scss";

export const Button = ({
  children,
  color = "primary",
  outline = "none",
  border = "default",
}) => {
  const classNames = ["btn", color, outline, border].join(" ");

  return <button className={classNames}>{children}</button>;
};
