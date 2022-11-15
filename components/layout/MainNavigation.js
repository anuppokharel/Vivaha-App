import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  const navEl = useRef();
  const [elIsVisible, setElIsVisible] = useState(false);

  useEffect(() => {
    const sticky = () => {
      if (window.scrollY >= 150) {
        setElIsVisible(true);
      } else {
        setElIsVisible(false);
      }
    };

    window.addEventListener("scroll", sticky);
  }, []);

  return (
    <header className={styles.navigationWrapper}>
      <div className={styles.headerCarousel}>
        <img src="/highlight-gallery/first.jpg" />
      </div>
      <nav
        ref={navEl}
        id="navBar"
        className={elIsVisible ? styles.sticky : " "}
      >
        <Link href="/" className={styles.mainHeaderImg}>
          <img
            className={styles.logo}
            alt="Vivaha Weddings"
            title="Vivaha Weddings"
            src="/vivahabw.png"
          ></img>
        </Link>
        <div id="menu" className={styles.menu}>
          <div>
            <Link href="/package">
              <i className="fas fa-box-open"></i>
              <span>Packages</span>
            </Link>
          </div>
          <div>
            <Link href="/services">
              <i className="fas fa-hands-helping"></i>
              <span>Services</span>
            </Link>
          </div>
          <div>
            <Link href="/photography">
              <i className="fas fa-camera"></i>
              <span>Photography</span>
            </Link>
          </div>
          <div>
            <Link href="/contact">
              <i className="fas fa-id-card-alt"></i>
              <span>Contact</span>
            </Link>
          </div>
          <div>
            <Link href="/about">
              <i className="far fa-address-card"></i>
              <span>About</span>
            </Link>
          </div>
          <div>
            <Link href="/login">
              <i className="fa-solid fa-right-to-bracket"></i>
              <span>Login</span>
            </Link>
          </div>
          <div>
            <Link href="/register">
              <i className="fa-solid fa-user-plus"></i>
              <span>Register</span>
            </Link>
          </div>
        </div>
      </nav>
      <div className={styles.content}>
        <img className={styles.slideLeft} src="/love.png" />
        <p className={styles.slideLeft}>
          This is the first smartwatch from our company. We're make a huge
          collection of watches in all categories
        </p>
        <div className={`${styles.links} ${styles.slideLeft}`}>
          <a href="#" className={styles.LearnMore}>
            Learn More
          </a>
          <a href="#">or Contact</a>
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
