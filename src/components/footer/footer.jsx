import styles from "./footer.module.css";
import leftphoto from '../../img/leftphoto.png'
import rightphoto from '../../img/rightphoto.png'
export const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.cont}>
        <h2 className={styles.main_text}>
          Також додатково можна <br /> придбати різні типи паперу
        </h2>
        <a className={styles.button_buy} href="#mainbuy">Придбати</a>
        <img src={leftphoto} alt="img printer" className={styles.phone_img_left}/>
        <img src={rightphoto} alt="img printer" className={styles.phone_img_right}/>
      </div>
    </section>
  );
};
