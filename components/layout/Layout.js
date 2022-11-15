import MainNavigation from "./MainNavigation";

import styles from "./Layout.module.css";
import MainFooter from "./MainFooter";
import { Fragment } from "react";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={styles.wrapper}>{props.children}</main>
      <MainFooter />
    </Fragment>
  );
};

export default Layout;
