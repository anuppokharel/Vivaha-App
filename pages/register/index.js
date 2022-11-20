import Link from "next/link";

import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.image_container}>
        <img src="image.jpg" />
      </div>
      <div className={styles.register_container}>
        <h1>Register</h1>

        <form>
          <div className={styles.input_field_wrapper}>
            <div className={styles.input_field}>
              <input type="text" required />
              <span></span>
              <label>First Name</label>
            </div>
            <div className={styles.input_field}>
              <input type="text" required />
              <span></span>
              <label>Last Name</label>
            </div>
          </div>

          <div className={styles.input_field}>
            <input type="text" required />
            <span></span>
            <label>Email</label>
          </div>

          <div className={styles.input_field}>
            <input type="text" required />
            <span></span>
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

          <div className={styles.input_field}>
            <input type="text" required />
            <span></span>
            <label>Password</label>
          </div>

          <div className={styles.input_field}>
            <input type="text" required />
            <span></span>
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
