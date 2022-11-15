import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.center}>
      <h1>Login</h1>
      <form method="post">
        <div className={styles.txt_field}>
          <input type="text" required />
          <span></span>
          <label>Username</label>
        </div>
        <div className={styles.txt_field}>
          <input type="password" required />
          <span></span>
          <label>Password</label>
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

export default Login;
