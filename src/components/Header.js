import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.header__image} src={require("../images/troll-face.png")} alt="troll-face" />
      <h2 className={styles.header__title}>Meme generator</h2>
      <h4 className={styles.header__project}>React Course - Project 3</h4>
    </header>
  );
};

export default Header;
