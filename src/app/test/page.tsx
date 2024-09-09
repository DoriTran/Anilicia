import Paper from "@mui/material/Paper";
import { getAnimeFullById } from "@/action/type/anime";
import styles from "./page.module.scss";
import JSON from "./JSON";

const TestPage = async () => {
  const response = await getAnimeFullById(1);

  return (
    <div className={styles.page}>
      <div className={styles.title}>API Result:</div>
      <Paper elevation={3} className={styles.JSONDisplay}>
        <JSON json={response} />
        Lmao
      </Paper>
    </div>
  );
};

export default TestPage;
