import Header from "./components/Header";
import MemeForm from "./components/MemeForm";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.meme__container}>
      <Header />
      <MemeForm />
    </div>
  );
};

export default App;
