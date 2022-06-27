import "./checkbox.scss";

export const Checkbox = ({ checked, onChange, label, extra }) => {
  function handleChange() {
    onChange(!checked);
  }

  return (
    <div className="checkboxContainer">
      <input type="checkbox" onChange={handleChange} checked={checked} />
      <div className="checkboxLabel" onClick={handleChange}>
        <label>{label}</label>
        {extra}
      </div>
    </div>
  );
};
