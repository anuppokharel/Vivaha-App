import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.navigationWrapper}>
      <video autoPlay loop muted playsInline className={styles.backVideo}>
        <source src="video_2.mp4" type="video/mp4" />
      </video>
      <nav>
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
          Book Your Wedding
          <br /> With Vivaha
        </p>
        <div className={`${styles.links} ${styles.slideLeft}`}>
          <a href="#" className={styles.LearnMore}>
            Book Wedding
          </a>
          <a href="#" className={styles.contact}>
            or Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
