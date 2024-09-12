"use client";

import { FC } from "react";
import ApImage from "@/components/ApImage/ApImage";
import { useRouter } from "next/navigation";
import styles from "./ActionButton.module.scss";

interface ActionButtonProps {
  to: string;
  children: React.ReactNode;
}

const ActionButton: FC<ActionButtonProps> = ({ to, children }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <ApImage alt="decorate ribbon" src="/common/ribbon-btn.png" className={styles.decorateRibbon} />
      <div className={styles.button} onClick={() => router.push(to)}>
        {children}
      </div>
    </div>
  );
};

export default ActionButton;
