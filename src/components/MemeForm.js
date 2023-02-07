import styles from "./MemeForm.module.css";

const MemeForm = () => {
  return (
    <main>
      <form className={styles.form}>
        <input
          className={styles.form__input}
          type="text"
          placeholder="First text"
        />
        <input
          className={styles.form__input}
          type="text"
          placeholder="Second text"
        />
        <button className={styles.form__button}> Get a new meme image</button>
      </form>
    </main>
  );
};

export default MemeForm;
