import MainNavigation from "./MainNavigation";

import styles from "./Layout.module.css";
import MainFooter from "./MainFooter";

const Layout = (props) => {
  return (
    <div className={styles.body}>
      <MainNavigation />
      <main className={styles.wrapper}>{props.children}</main>
      <MainFooter />
    </div>
  );
};

export default Layout;
