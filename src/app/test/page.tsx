"use client";

import Paper from "@mui/material/Paper";
import { ApButton } from "@/components";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./page.module.scss";

const TestPage = () => {
  const props = {
    startIcon: faHeart,
    height: "small",
    onClick: () => console.log("wtf"),
  };

  return (
    <div className={styles.page}>
      <div className={styles.title}>API Result:</div>
      <Paper elevation={3} className={styles.JSONDisplay}>
        <ApButton color="dark" {...props}>
          Dark
        </ApButton>
        <ApButton color="primary" selected {...props}>
          Primary
        </ApButton>
        <ApButton color="secondary" {...props}>
          Secondary
        </ApButton>
        <ApButton color="white" {...props}>
          White
        </ApButton>
        <ApButton color="pink" {...props}>
          Pink
        </ApButton>
        <ApButton color="plum" {...props}>
          Plum
        </ApButton>
        <ApButton color="plum" icon={faHeart} {...props} />
      </Paper>
    </div>
  );
};

export default TestPage;
