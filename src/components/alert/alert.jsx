import "./alert.scss";

export const Alert = ({ children, type = "primary", icon }) => {
  return (
    <div className={`alertContainer ${type}`}>
      <div className="alertIconContainer">{icon}</div>
      <div className="alertTextContainer">{children}</div>
    </div>
  );
};
