import styles from "../header/header.module.css";
import mainimg from "../../img/Mainpicture.png";
import logo from "../../img/OLAF_logo.png";
export const Header = () => {
  return (
    <header>
      <div className={styles.cont}>
        {/* NAVIGATION */}
        <div className={styles.cont_navigation}>
          <img src={logo} alt="logotip" className={styles.logo} />
          <nav className={styles.nav}>
            <a href="#" className={styles.link_nav}>
              Головна
            </a>
            <a href="#" className={styles.link_nav}>
              Відгуки
            </a>
            <a href="#" className={styles.link_nav}>
              Детальна інформація
            </a>
            <a href="#" className={styles.link_nav}>
              Контакти
            </a>
          </nav>
          <div>
            <a href="https://web.telegram.org/k/#@Hanterpm" className={styles.link_telegram}>
              <img
                width="94"
                height="94"
                src="https://img.icons8.com/3d-fluency/94/telegram.png"
                alt="telegram"
              />
            </a>
          </div>
        </div>
        {/* NAVIGATION */}
        <h1 className={styles.header_text} id="mainbuy">
          <span>Дитячий портативний міні принтер</span> Portable Mini Printer
        </h1>
        <div className={styles.wrapper_header}>
          <div className={styles.wrap_for_texbut}>
            <p className={styles.header_desc}>
              <span>Дитячий термо-принтер</span> - це чудовий подарунок для
              дитини на будь який вік. <br /> Неймовірний маленький принтер{" "}
              <span>Mini</span> допоможе вам краще запам'ятати, <br /> записати,
              передати повідомлення, зняти знімок, скріншоти. <br />
              На даному принтері можна{" "}
              <span>
                друкувати будь-яку текстову або <br />
                графічну інформацію прямо з смартфона через bluetooth з'єднання.
              </span>
            </p>
            <div className={styles.buttons_cont}>
              <button className={styles.buy_button}>Придбати</button>
              <button className={styles.details_button}>Деталі</button>
            </div>
          </div>
          <img src={mainimg} alt="photo mini_printer" />
        </div>
      </div>
    </header>
  );
};
