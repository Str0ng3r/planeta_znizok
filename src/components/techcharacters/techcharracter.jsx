import styles from "./techharacters.module.css";
import techchar from "../../img/techchar.png";
export const Techchar = () => {
  return (
    <section className={styles.techchar}>
      <div className={styles.cont}>
        <img src={techchar} alt="mini-printer" className={styles.img_tech} />
        <div className={styles.cont_text}>
          <h3 className={styles.char_main_text}>
            Технічні
            <br />
            характеристики:
          </h3>
          <ul className={styles.tech_list}>
            <li>Тип: кишеньковий принтер, портативний bluetooth принтер</li>
            <li>Тип друку: Термодрук.</li>
            <li>Щільність друку: 203</li>
            <li>Колір друку: Чорно-білий (монохромний)</li>
            <li>Ширина друкування: 53 мм</li>
            <li>Витратні матеріали: рулонна термопапір.</li>
            <li>Розмір паперу: 57×30 мм.</li>
            <li>Спосіб під'єднання: через Bluetooth.</li>
            <li>Підтримувані смартфони: Android, iOS.</li>
            <li>Живлення: вбудований акумулятор 1000 мА·год.</li>
          </ul>
          <a className={styles.button_buy} href="#mainbuy">Придбати</a>
        </div>
      </div>
    </section>
  );
};
