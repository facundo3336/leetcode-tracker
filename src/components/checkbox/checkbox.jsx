import "./checkbox.scss";

export const Checkbox = ({ checked, onChange, label }) => {
  function handleChange(e) {
    onChange(e.target.checked);
  }

  return (
    <div className="checkBoxContainer">
      <input type="checkbox" onChange={handleChange} checked={checked} />
      <label>{label}</label>
    </div>
  );
};
