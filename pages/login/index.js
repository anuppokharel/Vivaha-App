import { useState } from "react";
import styles from "./Login.module.css";

import useInput from "../../hooks/use-input";

const Login = () => {
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    resetEmailInput();
    resetPasswordInput();
  };

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
              emailInputHasError ? styles.errorInput : ""
            }`}
          >
            <input
              type="text"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
              required
            />
            <span></span>
            {emailInputHasError && <p>Please enter valid email address</p>}
            <label>Email</label>
          </div>

          <div
            className={`${styles.input_field} ${
              passwordInputHasError ? styles.errorInput : ""
            }`}
          >
            <input
              type="password"
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              value={enteredPassword}
              required
            />
            <span></span>
            {passwordInputHasError && <p>Please enter valid password</p>}
            <label>Password</label>
          </div>

          <div className={styles.forgot_pass}>Forgot Password?</div>

          <button type="submit" disabled={!formIsValid}>
            Login
          </button>

          <div className={styles.signup_link}>
            Not a member? <a href="#">Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
