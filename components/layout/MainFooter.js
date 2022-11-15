import styles from "./MainFooter.module.css";

const MainFooter = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSocial}>
          <a
            href="https://www.youtube.com/channel/UC64ARI0-DAxjzZoTGBBr77g/featured"
            target="blank"
          >
            <p>
              <i className="fa-brands fa-youtube" />
            </p>
          </a>
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
          <a href="https://www.tiktok.com/@vivahaaaa" target="blank">
            <p>
              <i className="fa-brands fa-tiktok" />
            </p>
          </a>
        </div>
        <div className={styles.footerCopyright}>
          <div className={styles.endFooterStart}>
            <a href="#">
              <p>Contact us</p>
            </a>
            <a href="#">
              <p>Cookies</p>
            </a>
            <a href="#">
              <p>Terms of Use</p>
            </a>
          </div>
          <div className={styles.endFooterFinish}>
            <small>&copy; The Jung Production</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
