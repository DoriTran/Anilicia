import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import ApImage from "../ApImage/ApImage";
import ApButton from "../ApButton/ApButton";
import ApAvatar from "../ApAvatar/ApAvatar";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.leftSide}>
        <div className={styles.iconBrand}>
          <ApImage src="/small-icon.png" alt="logo" className={styles.logo} />
          <div className={styles.brand}>Anilicia</div>
        </div>
        <div className={styles.navbarAction}>
          <SearchBox />
          <LanguageSwitch />
          <ApButton color="dark" endIcon={faShuffle}>
            Random
          </ApButton>
        </div>
      </div>
      <div className={styles.rightSide}>
        Log in
        <ApAvatar src="/common/default avatar.png" size="2.5rem" color="white" />
      </div>
    </div>
  );
};

export default Navbar;
