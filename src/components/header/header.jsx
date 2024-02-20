import styles from "../header/header.module.css";
import mainimg from "../../img/Mainpicture.png";
import logo from "../../img/OLAF_logo.png";
import axios from "axios";
import { useState } from "react";
export const Header = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [tel, setTel] = useState("");
  const [comm, setComm] = useState("");
  return (
    <header>
      {modal && (
        <div className={styles.modal_window}>
          <form className={styles.forma}>
            <button
              className={styles.close_button}
              onClick={() => {
                setModal(false);
                setComm("");
                setMail("");
                setModal("");
                setName("");
                setTel("");
              }}
            >
              X
            </button>
            <div className={styles.form_cont}>
              <h4 className={styles.name_form}>Оплата</h4>
              <label htmlFor="name" className={styles.label_name}>
                <p>Ім'я</p>
                <input
                  type="text"
                  id="name"
                  placeholder="Введіть ваше ім'я"
                  onChange={(evt) => {
                    setName(evt.target.value);
                  }}
                />
              </label>
              <label htmlFor="mail" className={styles.label_mail}>
                <p>Електронна пошта</p>
                <input
                  type="email"
                  id="mail"
                  placeholder="anonymus@gmail.com"
                  onChange={(evt) => {
                    console.log(evt.target.value);
                    setMail(evt.target.value);
                  }}
                />
              </label>
              <label
                htmlFor="number"
                className={styles.label_tel}
                onChange={(evt) => {
                  setTel(evt.target.value);
                }}
              >
                <p>Мобільний номер</p>
                <input type="tel" id="number" placeholder="+380980000000" />
              </label>
              <label htmlFor="comment" className={styles.label_comment}>
                <p>Коментар</p>
                <textarea
                  name="comment"
                  id="comment"
                  cols="30"
                  rows="6"
                  placeholder="Хотів би зауважити що...."
                  onChange={(evt) => {
                    setComm(evt.target.value);
                  }}
                ></textarea>
              </label>
              <button
                className={styles.button_send}
                type="button"
                onClick={() => {
                  setModal(false);
                  setComm("");
                  setMail("");
                  setModal("");
                  setName("");
                  setTel("");
                  const obj = {
                    name,
                    mail,
                    tel,
                    comment: comm,
                  };
                  axios
                    .post(
                      "https://65d4dcad3f1ab8c634362706.mockapi.io/dannie/order",
                      obj
                    )
                    .then((response) => {
                      // Обработка успешного ответа
                      console.log("Заявка успішно відправлена");
                    })
                    .catch((error) => {
                      // Обработка ошибки
                      console.error("Помилка замовлення");
                    });
                }}
              >
                Замовити
              </button>
            </div>
          </form>
        </div>
      )}
      <div className={styles.cont}>
        {/* NAVIGATION */}
        <div className={styles.cont_navigation}>
          <img src={logo} alt="logotip" className={styles.logo} />
          <nav className={styles.nav}>
            <a href="#main" className={styles.link_nav}>
              Головна
            </a>
            <a href="#reviews" className={styles.link_nav}>
              Відгуки
            </a>
            <a href="#char" className={styles.link_nav}>
              Детальна інформація
            </a>
            <a href="#contacts" className={styles.link_nav}>
              Контакти
            </a>
          </nav>
          <div>
            <a
              href="https://web.telegram.org/k/#@Hanterpm"
              className={styles.link_telegram}
            >
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
        <div className={styles.wrapper_header} id="main">
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
              <button
                className={styles.buy_button}
                onClick={() => {
                  setModal(true);
                }}
              >
                Придбати
              </button>
              <a className={styles.details_button} href="#detali">Деталі</a>
            </div>
          </div>
          <img src={mainimg} alt="photo mini_printer" />
        </div>
      </div>
    </header>
  );
};
