import MainNavigation from "./MainNavigation";

import styles from "./Layout.module.css";
import MainFooter from "./MainFooter";
import { Fragment } from "react";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <div className={styles.wrapper}>
        <main className={styles.main}>{props.children}</main>
      </div>
      <MainFooter />
    </Fragment>
  );
};

export default Layout;
