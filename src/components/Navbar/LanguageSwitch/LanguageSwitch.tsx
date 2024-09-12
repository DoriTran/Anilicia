"use client";

import clsx from "clsx";
import { StoreLocalType, useStoreLocal } from "@/store";
import { useShallow } from "zustand/react/shallow";
import ApTooltip from "@/components/ApTooltip/ApTooltip";
import styles from "./LanguageSwitch.module.scss";

const LanguageSwitch = () => {
  const { language, switchLanguage } = useStoreLocal(
    useShallow((state: StoreLocalType) => ({ language: state.language, switchLanguage: state.switchLanguage })),
  );

  return (
    <ApTooltip tooltip="Change language of anime name">
      <div className={styles.container} onClick={() => switchLanguage()}>
        <button className={clsx(styles.buttonLeft, { [styles.selectedButton]: language === "EN" })}>EN</button>
        <button className={clsx(styles.buttonRight, { [styles.selectedButton]: language === "JP" })}>JP</button>
        <div
          className={styles.indicator}
          style={{
            left: language === "EN" ? "0px" : "50%",
            borderRadius: language === "EN" ? "4px 0 0 4px" : "0 4px 4px 0",
          }}
        />
      </div>
    </ApTooltip>
  );
};

export default LanguageSwitch;
