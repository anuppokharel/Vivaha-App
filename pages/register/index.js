import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.center}>
      <h1>Register</h1>
      <form method="post">
        <div className={styles.txt_field}>
          <input type="text" required />
          <span></span>
          <label>First Name</label>
        </div>
        <div className={styles.txt_field}>
          <input type="text" required />
          <span></span>
          <label>Last Name</label>
        </div>
        <div className={styles.txt_field}>
          <input type="text" required />
          <span></span>
          <label>Email</label>
        </div>
        <div className={styles.txt_field}>
          <input type="text" required />
          <span></span>
          <label>Phone no.</label>
        </div>
        <div className={styles.txt_field}>
          <input type="text" required />
          <span></span>
          <label>Address</label>
        </div>
        <div className={styles.txt_field}>
          <input type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <div className={styles.txt_field}>
          <input type="password" required />
          <span></span>
          <label>Confirm Password</label>
        </div>
        <div className={styles.pass}>Forgot Password?</div>
        <button type="submit">Login</button>
        <div className={styles.signup_link}>
          Not a member? <a href="#">Signup</a>
        </div>
      </form>
    </div>
  );
};

export default Register;
