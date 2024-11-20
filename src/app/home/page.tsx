import styles from "./page.module.scss";

const HomePage = () => {
  return (
    <main className={styles.page}>
      <DashboardCarousel />
    </main>
  );
};

export default HomePage;
