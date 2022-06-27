import { useState } from "react";
import { Input } from "../../components/input/input";
import Key from "@mui/icons-material/Key";
import MailOutline from "@mui/icons-material/MailOutline";
import { Checkbox } from "../../components/checkbox/checkbox";
import { Button } from "../../components/button/button";
import { Link } from "react-router-dom";
import "./login.scss";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  function handleChangeEmail(value) {
    setEmail(value);
  }

  function handleChangePassword(value) {
    setPassword(value);
  }

  function handleCheckbox(value) {
    setCheckbox(value);
  }

  return (
    <div className="loginPage">
      <div className="loginInformationContainer">
        <div className="loginLogo"></div>
        <h4>Welcome back!</h4>
        <span className="loginPageSubtitle">
          Login to access your Stack Account
        </span>
        <div className="loginInputsContainer">
          <Input
            value={email}
            onChange={handleChangeEmail}
            icon={<MailOutline />}
            label="Email Adress:"
            placeholder="jhon@doe.com"
          />
          <Input
            value={password}
            onChange={handleChangePassword}
            icon={<Key />}
            label="Password:"
            placeholder="Enter your password:"
          />
          <Checkbox
            onChange={handleCheckbox}
            checked={checkbox}
            label="Remember me"
          />
        </div>
        <Button className="loginButton" color="primary" children="Login" />
        <Button color="link" children="Forgot password?" />
        <span className="loginSignupParagraph">
          Do you have an account? <Link to="/">Sign up!</Link>
        </span>
      </div>
      <div className="loginImage"></div>
    </div>
  );
};
