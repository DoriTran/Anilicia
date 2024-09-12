import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import ApImage from "../ApImage/ApImage";
import ApButton from "../ApButton/ApButton";
import ApAvatar from "../ApAvatar/ApAvatar";
import SearchBox from "./SearchBox/SearchBox";
import LanguageSwitch from "./LanguageSwitch/LanguageSwitch";
import ApTooltip from "../ApTooltip/ApTooltip";
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
          <ApTooltip tooltip="Find random anime" divWrapper>
            <ApButton color="dark" endIcon={faShuffle}>
              Random
            </ApButton>
          </ApTooltip>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.loginText}>Log in</div>
        <ApAvatar src="/common/default avatar.png" size="2.5rem" color="white" className={styles.avatar} />
      </div>
    </div>
  );
};

export default Navbar;
