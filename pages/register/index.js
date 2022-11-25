import Link from "next/link";

import styles from "./Register.module.css";

import useInput from "../../hooks/use-input";

const Register = () => {
  const {
    value: fNameValue,
    isValid: fNameIsValid,
    hasError: fNameHasError,
    valueChangeHandler: fNameChangeHandler,
    valueBlurHandler: fNameBlurHandler,
    reset: fNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lNameValue,
    isValid: lNameIsValid,
    hasError: lNameHasError,
    valueChangeHandler: lNameChangeHandler,
    valueBlurHandler: lNameBlurHandler,
    reset: lNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  const {
    value: contactValue,
    isValid: contactIsValid,
    hasError: contactHasError,
    valueChangeHandler: contactChangeHandler,
    valueBlurHandler: contactBlurHandler,
    reset: contactReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: cPasswordValue,
    isValid: cPasswordIsValid,
    hasError: cPasswordHasError,
    valueChangeHandler: cPasswordChangeHandler,
    valueBlurHandler: cPasswordBlurHandler,
    reset: cPasswordReset,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (
    fNameIsValid &&
    lNameIsValid &&
    emailIsValid &&
    contactIsValid &&
    passwordIsValid &&
    cPasswordIsValid
  ) {
    formIsValid(true);
  }

  return (
    <div className={styles.main_container}>
      <div className={styles.image_container}>
        <img src="image.jpg" />
      </div>
      <div className={styles.register_container}>
        <h1>Register</h1>

        <form>
          <div className={styles.input_field_wrapper}>
            <div
              className={`${styles.input_field} ${
                fNameHasError ? styles.errorInput : ""
              }`}
            >
              <input
                type="text"
                onChange={fNameChangeHandler}
                onBlur={fNameBlurHandler}
                required
              />
              <span></span>
              {fNameHasError && <small>Enter your first name</small>}
              <label>First Name</label>
            </div>
            <div
              className={`${styles.input_field} ${
                lNameHasError ? styles.errorInput : ""
              }`}
            >
              <input
                type="text"
                onChange={lNameChangeHandler}
                onBlur={lNameBlurHandler}
                required
              />
              <span></span>
              {lNameHasError && <small>Enter your last name</small>}
              <label>Last Name</label>
            </div>
          </div>

          <div
            className={`${styles.input_field} ${
              emailHasError ? styles.errorInput : ""
            }`}
          >
            <input
              type="text"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              required
            />
            <span></span>
            {emailHasError && <p>Please enter valid email address</p>}
            <label>Email</label>
          </div>

          <div
            className={`${styles.input_field} ${
              contactHasError ? styles.errorInput : ""
            }`}
          >
            <input
              type="text"
              onChange={contactChangeHandler}
              onBlur={contactBlurHandler}
              required
            />
            <span></span>
            {contactHasError && <p>Please enter your contact no.</p>}
            <label>Contact no.</label>
          </div>

          <div className={styles.input_field_wrapper}>
            <div className={styles.input_field}>
              <input type="text" required />
              <span></span>
              <label>Country</label>
            </div>
            <div className={styles.input_field}>
              <input type="text" required />
              <span></span>
              <label>City</label>
            </div>
            <div className={styles.input_field}>
              <input type="text" required />
              <span></span>
              <label>Street</label>
            </div>
          </div>

          <div
            className={`${styles.input_field} ${
              passwordHasError ? styles.errorInput : ""
            }`}
          >
            <input
              type="text"
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              required
            />
            <span></span>
            {passwordHasError && <p>Please enter a password</p>}
            <label>Password</label>
          </div>

          <div
            className={`${styles.input_field} ${
              cPasswordHasError ? styles.errorInput : ""
            }`}
          >
            <input
              type="text"
              onChange={cPasswordChangeHandler}
              onBlur={cPasswordBlurHandler}
              required
            />
            <span></span>
            {cPasswordHasError && <p>Please enter a matching password</p>}
            <label>Confirm Password</label>
          </div>

          <button type="submit">Register</button>

          <div className={styles.login_link}>
            Already a member? <Link href="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
