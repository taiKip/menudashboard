import classes from "./Auth.module.css";
import HomeImage from "../../assets/home.jpg";
import { ChangeEventHandler, FormEventHandler } from "react";
import { useState} from "react";
import { EMAILREGEX, PASSWORDREGEX } from "./Regex";
import { FocusEventHandler } from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import VisiblityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Blurhash } from "react-blurhash";

const Auth = () => {
  
  const history = useHistory()
  const { login } = useContext(AuthContext)
  //auth details validation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setEmailIsValid] = useState(false);
  const [isPasswordValid, setPasswordIsValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null)
  //toggle show user password input
  const [showPassword, setShowPassword] = useState(false)
  //blurhashtoggle
  const [showImage, setShowImage] = useState(false)
  //image styles
  const style = !showImage?classes.hide:""
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
          const tokenExpiry= new Date(new Date().getTime()+(data.expiresIn)*1000 )
         login(data.idToken,tokenExpiry)
          history.replace("/dashboard")
        }).catch(error => {
        
        setAuthError(error.message)
      })
    } 
  };
  let  errorMessage: string | null="Authentication Failed";
  if (authError) {
    switch (authError) {
      case "EMAIL_NOT_FOUND":
        errorMessage = "Authentication failed please check your email"
        break;
      case "INVALID_PASSWORD":
        errorMessage = "Authentication failed please check your password"
        break;
      case "USER_DISABLED":
        errorMessage = "Authentication failed,your account has been disabled"
        break;
    }
  }
  const togglePasswordVisibility = () => {
    setShowPassword(prev=>!prev)
  }
  const handleOnload = () => {
    setShowImage(true)
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.shape}>
        {!showImage && <Blurhash
          hash="L6BV^d9Z5TiH~CE2t7Mx00pIxtOZ"
          width={1500}
          height={1500}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />}

        <img className={style} src={HomeImage} alt="Sign in Page" onLoad={handleOnload} />
      </div>
      <div className={classes.authentication}>
        <div>
          <h1>Sign in</h1>
        </div>
        {authError && <p style={{color:"red"}}>{errorMessage}</p>}
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
          <span className={classes.password}>
            <input
              className={passwordStyles}
              id="password"
              minLength={6}
              type={showPassword?"text":"password"}
              required
              value={password}
              onChange={handlePassword}
                onBlur={handlePasswordOnBlur}
               
              />
              {!showPassword && <VisiblityIcon style={{ background: "#DEF2F1", height: 40 }} onClick={togglePasswordVisibility }/>}
              {showPassword && <VisibilityOffIcon style={{ background: "#DEF2F1", height: 40 }} onClick={togglePasswordVisibility}/>}
            </span>
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
