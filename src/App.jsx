import { useState } from "react";
import { Checkbox } from "./components/checkbox/checkbox";

export const App = () => {
  const [checkbox, setCheckbox] = useState(false);

  function handleChange(value) {
    setCheckbox(value);
  }

  return <Checkbox checked={checkbox} onChange={handleChange} label="Holas?" />;
};
