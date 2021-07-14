import classes from "./Auth.module.css";
import HomeImage from "../../assets/home.jpg";
import { ChangeEventHandler, FormEventHandler } from "react";
import { useState} from "react";
import { EMAILREGEX, PASSWORDREGEX } from "./Regex";
import { FocusEventHandler } from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Auth = () => {
  const history = useHistory()
  const {login} = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setEmailIsValid] = useState(false);
  const [isPasswordValid, setPasswordIsValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [authError,setAuthError] = useState<string|null>(null)
  let emailStyles = `${classes.input} ${
    emailTouched && (isEmailValid ? "" : classes.invalid)
  }`;
  let passwordStyles = `${classes.input} ${
    passwordTouched && (isPasswordValid ? "" : classes.invalid)
  }`;

  const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };
  const handleEmailOnBlur: FocusEventHandler<HTMLInputElement> = () => {
    setEmailTouched(true);
    if (email.trim().length === 0 || EMAILREGEX.test(email) === false) {
      setEmailIsValid(false);
    } else {
      setEmailIsValid(true);
    }
  };
  const handlePasswordOnBlur: FocusEventHandler<HTMLInputElement> = () => {
    setPasswordTouched(true);
    if (
      password.trim().length === 0 ||
      PASSWORDREGEX.test(password) === false
    ) {
      setPasswordIsValid(false);
    } else {
      setPasswordIsValid(true);
    }
  };
  const handleSubmit: FormEventHandler = (event) => {
    
    event.preventDefault();
    if (isEmailValid && isPasswordValid) {
      fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBRueLp-eau05AFyomIECE8WCHEFCkmYfY", {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken:true
        }),
        headers: { "Content-Type": "application/json" }
      })
        .then(res => {
          if (!res.ok) {
            return res.json().then(data => {
              if (data) {
              throw new Error(data.error.message)
            }
          })
         
          }
          return res.json()
        }).then(data => {
         login(data.idToken)
          history.replace("/dashboard")
        }).catch(error => {
          console.log("Authentication Failed")
        setAuthError(error.message)
      })
    } 
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.shape}>
        <img src={HomeImage} alt="Sign in Page" />
      </div>
      <div className={classes.authentication}>
        <div>
          <h1>Sign in</h1>
        </div>

        <form className={classes["input-form"]} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className={emailStyles}
              id="email"
              placeholder="johndoe@example.com"
              type="email"
              required
              value={email}
              onChange={handleEmail}
              onBlur={handleEmailOnBlur}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className={passwordStyles}
              id="password"
              minLength={6}
              type="password"
              required
              value={password}
              onChange={handlePassword}
              onBlur={handlePasswordOnBlur}
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
