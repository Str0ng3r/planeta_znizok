import styles from "./easy.module.css";
import paper1 from '../../img/paper1.png'
import paper2 from '../../img/paper2.png'
import paper3 from '../../img/paper3.png'
export const Easy = () => {
  return (
    <section className={styles.easy}>
      <div className={styles.cont}>
        <h2 className={styles.easy_text}>
          СУМІСНИЙ ТЕРМОПАПІР
          <br />
          ЛЕГКО ЗАМІНИТИ
        </h2>
        <p className={styles.mini_text}>Знайди той, який потрібен тобі</p>
        <div className={styles.wrap_cont}>
          <div className={styles.cont_paper}>
            <div className={styles.circle_pink}>
              <img src={paper1} alt="photo" />
            </div>
            <h3 className={styles.name_paper}>Regular<br />paper</h3>
            <button className={styles.button_moredetail}>Детальніше</button>
          </div>
          <div className={styles.cont_paper}>
            <div className={styles.circle_blue}>
              <img src={paper2} alt="photo" />
            </div>
            <h3 className={styles.name_paper}>Sticker<br />paper</h3>
            <button className={styles.button_moredetail}>Детальніше</button>
          </div>
          <div className={styles.cont_paper}>
            <div className={styles.circle_purple}>
              <img src={paper3} alt="photo" />
            </div>
            <h3 className={styles.name_paper}>Label<br />paper</h3>
            <button className={styles.button_moredetail}>Детальніше</button>
          </div>
        </div>
      </div>
    </section>
  );
};
