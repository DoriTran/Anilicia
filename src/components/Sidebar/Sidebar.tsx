import { useStoreGlobal } from "@/store";
import { useShallow } from "zustand/react/shallow";
import ApImage from "../ApImage/ApImage";
import styles from "./Sidebar.module.scss";
import InfoLink from "./InfoLink/InfoLink";
import ActionButton from "./ActionButton/ActionButton";

const Sidebar = () => {
  const { isSidebarOpenned, switchSidebar } = useStoreGlobal(
    useShallow((state) => ({ isSidebarOpenned: state.isSidebarOpenned, switchSidebar: state.switchSidebar })),
  );

  return (
    <div className={styles.sidebar}>
      {isSidebarOpenned && (
        <div
          className={styles.blurBackground}
          style={{ opacity: isSidebarOpenned ? 0.35 : 0 }}
          onClick={() => switchSidebar()}
        />
      )}
      <div className={styles.container} {...(isSidebarOpenned && { style: { left: 0 } })}>
        <div className={styles.staticWrapper}>
          <div className={styles.wrapper}>
            <ApImage src="/common/small-logo.png" alt="Anilicia logo" className={styles.logo} />
            <div className={styles.action}>
              <ActionButton to="/home">Home</ActionButton>
              <ActionButton to="/watch">Watch</ActionButton>
              <ActionButton to="/schedule">Schedule</ActionButton>
              <ActionButton to="/settings">Settings</ActionButton>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.infoLink}>About me</div>
            <div className={styles.infoLink}>
              Contact
              <InfoLink linkto="linkedin" />
              <InfoLink linkto="facebook" />
              <InfoLink linkto="github" />
              <InfoLink linkto="gmail" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
