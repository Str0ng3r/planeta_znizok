import styles from "./main.module.css";
import mainimg from "../../img/img_main.png";
export const Main = () => {
  return (
    <main>
      <div className={styles.cont}>
        <div className={styles.left_box}></div>

        <div className={styles.left_box}>
          <h1 className={styles.main_company}>Вступна компанія 2024</h1>
          <div className={styles.box_buttons_main}>
            <button className={styles.button_documents}>
              Подати документи
            </button>
            <button className={styles.button_details}>Деталі</button>
          </div>
        </div>
        <div className={styles.right_box}>
          <img src={mainimg} alt="school and man" className={styles.main_img} />
        </div>
      </div>
    </main>
  );
};
