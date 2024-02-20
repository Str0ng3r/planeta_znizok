import styles from "./complect.module.css";
import complect from '../../img/complectimg.jpg'
export const Complect = () => {
  return (
    <section className={styles.complect_sect}>
      <div className={styles.cont}>
        <div className={styles.text_cont}>
<h3 className={styles.main_text}>
    Комплектація:
</h3>
<p className={styles.complectation_desc}>
Портативний термопринтер — 1 шт. <br />
Рулон термопаперу — 1 шт. <br />
USB-кабель для заряджання — 1 шт. <br />
Інструкція 
</p>
<a className={styles.button_buy} href="#mainbuy">Придбати</a>
        </div>
        <img src={complect} alt="complect photo" className={styles.img_complect}/>
      </div>
    </section>
  );
};