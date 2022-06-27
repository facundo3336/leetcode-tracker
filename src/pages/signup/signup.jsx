import "../../styles/login-signup.scss";
import { useState } from "react";
import { Input } from "../../components/input/input";
import Key from "@mui/icons-material/Key";
import MailOutline from "@mui/icons-material/MailOutline";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Checkbox } from "../../components/checkbox/checkbox";
import { Button } from "../../components/button/button";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  function handleChangeName(value) {
    setName(value);
  }

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
    <div className="loginSignupPage">
      <div className="loginSignupInformationContainer">
        <div className="loginSignupLogo"></div>
        <h4>Sign up!</h4>
        <span className="loginSignupPageSubtitle onlySignUpsubtitleWeight">
          Create an account with FlowDash
        </span>
        <div className="loginSignupInputsContainer">
          <Input
            value={name}
            onChange={handleChangeName}
            icon={<AccountBoxIcon />}
            label="Name:"
            placeholder="Jhon Doe"
          />
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
            label="I accept"
            extra={<Link to="/">Terms and Conditions</Link>}
          />
        </div>
        <Button
          className="loginSignupButton onlySignupButtonMargin"
          color="primary"
          children="Create account"
        />
        <span className="loginSignupParagraph">
          <Link to="/auth/signin">Have an account?</Link>
        </span>
      </div>
      <div className="loginSignupImage"></div>
    </div>
  );
};
