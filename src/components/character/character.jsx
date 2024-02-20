import styles from "./character.module.css";
import photochar from '../../img/photo_character.png'
export const Character = () => {
  return (
    <section className={styles.char_section}>
      <div className={styles.cont}>
        <div className={styles.cont_for_text}>
          <h3 className={styles.main_text}>Характеристика:</h3>
          <ul className={styles.list_char}>
            <li>- Термодрук без використання фарби</li>
            <li>
              - Прямий друк зі смартфона через фірмовий застосунок - Fun print
            </li>
            <li>
              - Портативний і автономний мобільний принтер<br />із вбудованим
              акумулятором 1000 мА·год
            </li>
            <li>- Перегляд вмісту перед друком на екрані вашого телефона</li>
          </ul>
          <a className={styles.button_buy} href="#mainbuy">Придбати</a>
        </div>
        <img src={photochar} alt="mini-printer" className={styles.img_printer}/>
      </div>
    </section>
  );
};
