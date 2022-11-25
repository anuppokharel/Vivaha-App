import styles from "./MainFooter.module.css";

const MainFooter = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.footerCopyright}>
        <small>
          &copy; Vivaha 2022 | Made by{" "}
          <a href="#">
            <b>The Jung Production</b>.
          </a>
        </small>
      </div>
      <div className={styles.footerSocial}>
        <a href="https://www.facebook.com/vivahanp" target="blank">
          <p>
            <i className="fa-brands fa-facebook" />
          </p>
        </a>
        <a
          href="https://twitter.com/Vivahawed?s=20&t=b6S9eImeQulO6QFlNVQcDg"
          target="blank"
        >
          <p>
            <i className="fa-brands fa-twitter" />
          </p>
        </a>
        <a href="https://www.instagram.com/vivaha_wed" target="blank">
          <p>
            <i className="fa-brands fa-instagram" />
          </p>
        </a>
      </div>
    </footer>
  );
};

export default MainFooter;
