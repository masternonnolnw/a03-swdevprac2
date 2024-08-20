import Banner from "../components/Banner";
import Card from "../components/Card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner />
      <Card />
    </div>
  );
}
