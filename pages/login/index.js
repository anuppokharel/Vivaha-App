import { useRef, useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  // const nameHandlerRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnterednameIsValid] = useState(false);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const enteredNameChangeHandler = (event) => {
    setEnteredName(event.target.value);

    if (event.target.value.trim() !== "") {
      setEnterednameIsValid(true);
    }
  };

  const enteredNameBlurHandler = (event) => {
    setEnteredNameIsTouched(true);

    if (enteredName === "") {
      setEnterednameIsValid(false);
    }
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    setEnteredNameIsTouched(true);

    if (enteredName.trim() === "") {
      setEnterednameIsValid(false);
    } else {
      setEnterednameIsValid(true);
    }

    console.log(enteredName);
    // console.log(nameHandlerRef.current.value);
  };

  console.log(enteredNameIsValid, enteredNameIsTouched);

  const nameInputFieldIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  return (
    <div className={styles.main_container}>
      <div className={styles.image_container}>
        <img src="image.jpg" />
      </div>
      <div className={styles.login_container}>
        <h1>Login</h1>

        <form onSubmit={submitFormHandler}>
          <div
            className={`${styles.input_field} ${
              nameInputFieldIsInvalid ? styles.errorInput : ""
            }`}
          >
            <input
              type="text"
              onChange={enteredNameChangeHandler}
              onBlur={enteredNameBlurHandler}
              value={enteredName}
              // ref={nameHandlerRef}
            />
            <span></span>
            {nameInputFieldIsInvalid && <p>Email must not be empty</p>}
            <label>Email</label>
          </div>

          <div className={styles.input_field}>
            <input type="password" />
            <span></span>
            <label>Password</label>
          </div>

          <div className={styles.forgot_pass}>Forgot Password?</div>

          <button type="submit">Login</button>

          <div className={styles.signup_link}>
            Not a member? <a href="#">Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
