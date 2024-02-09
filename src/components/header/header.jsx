import styles from "../header/header.module.css";

export const Header = () => {
  return (
    <header>
      <div className={styles.cont}>
        <img src="" alt="" />
        <nav>
          <ul className={styles.nav_list}>
            <li className={styles.nav_link}>Студенту</li>
            <li className={styles.nav_link}>Факультети</li>
            <li className={styles.nav_link}>Підрозділи</li>
            <li className={styles.nav_link}>Міжнародна діяльність</li>
            <li className={styles.nav_link}>Управління</li>
            <li className={styles.nav_link}>Університет</li>
            <li className={styles.nav_link}>Наука</li>
          </ul>
        </nav>
        <div className={styles.social}>
          <a href="" className={styles.social_link}></a>
          <a href="" className={styles.social_link}></a>
          <a href="" className={styles.social_link}></a>
        </div>
        <button className={styles.button_call}>Зв'язок з нами</button>
      </div>
    </header>
  );
};
