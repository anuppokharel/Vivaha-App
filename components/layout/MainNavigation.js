import Link from "next/link";
import { useState } from "react";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  const [responsiveMenu, setResponsiveMenu] = useState(false);
  const [barsIsHidden, setBarsIsHidden] = useState(false);
  const [crossIsHidden, setCrossIsHidden] = useState(true);

  const menuChangeHandler = () => {
    setBarsIsHidden(!barsIsHidden);
    setCrossIsHidden(!crossIsHidden);
    setResponsiveMenu(!responsiveMenu);
  };

  return (
    <header className={styles.mainHeader}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="vivahaw.png" alt="Vivaha Weddings" />
        </Link>
      </div>
      <div onClick={menuChangeHandler} className={`${styles.responsiveMenu}`}>
        <div className={`${styles.bars} ${barsIsHidden ? styles.hidden : ""}`}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div
          className={`${styles.cross} ${crossIsHidden ? styles.hidden : ""}`}
        >
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
      <nav className={styles.menu}>
        <ul>
          <li>
            <Link href="/packages">Packages</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </nav>
      <nav
        className={`${styles.responsiveNav} ${
          barsIsHidden ? styles.openMenu : ""
        }`}
      >
        <ul>
          <li>
            <Link href="/packages">Packages</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
