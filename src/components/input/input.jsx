import "./input.scss";

export const Input = ({
  value,
  onChange,
  label,
  icon,
  placeholder = "",
  disable,
  error,
}) => {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <div className={`input`}>
      {label !== undefined && <label>{label}</label>}
      <div
        className={`inputContainer ${disable !== undefined && "disable"} ${
          error && "inputError"
        }`}
      >
        <div className="inputIconContainer">{icon && icon}</div>
        <input
          value={value}
          type="text"
          onChange={(e) => handleChange(e)}
          placeholder={placeholder ?? ""}
          disabled={disable}
        />
        {error && <i className="fa-solid fa-circle-exclamation"></i>}
      </div>
      {error && <span>{error}</span>}
    </div>
  );
};
