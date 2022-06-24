import "./checkbox.scss";

export const Checkbox = ({ checked, onChange, label }) => {
  function handleChange() {
    onChange(!checked);
  }

  return (
    <div className="checkBoxContainer">
      <input type="checkbox" onChange={handleChange} checked={checked} />
      <label onClick={handleChange}>{label}</label>
    </div>
  );
};
