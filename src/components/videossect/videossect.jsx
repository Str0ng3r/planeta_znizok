import styles from "./videossect.module.css";
export const Videossect = () => {
  return (
    <section>
      <div className={styles.cont}>
        <h2 className={styles.main_text}>
          ПРАВИЛА БЕЗПЕКИ У РАЗІ НАДЗВИЧАЙНИХ СИТУАЦІЙ
        </h2>
        <h4 className={styles.notation}>Не забувай притримуватися правил!</h4>
        <div className={styles.wrap_videos}>
          <div className={styles.wrap_video_cont}>
            <iframe
              className={styles.video_frame}
              src="https://www.youtube.com/embed/QyMLGT_MktU"
              title="Дії при знаходженні вибухонебезпечного предмету"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <h4 className={styles.name_video}>Дії при знаходженні вибухонебезпечного предмету</h4>
            <p className={styles.descript_video}>Навчальне Відео</p>
          </div>
          <div className={styles.wrap_video_cont}>
            <iframe
              className={styles.video_frame}
              src="https://www.youtube.com/embed/NpbGdKeZh44"
              title="Оповіщення"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <h4 className={styles.name_video}>Оповіщення</h4>
            <p className={styles.descript_video}>Навчальне Відео</p>
          </div>
          <div className={styles.wrap_video_cont}>
            <iframe
              className={styles.video_frame}
              src="https://www.youtube.com/embed/tbrhjOr_aag"
              title="Як врятуватись під час ядерного вибуху. Інструкція"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <h4 className={styles.name_video}>Як врятуватись під час ядерного вибуху.</h4>
            <p className={styles.descript_video}>Навчальне Відео</p>
          </div>
          <div className={styles.wrap_video_cont}>
            <iframe
              className={styles.video_frame}
              src="https://www.youtube.com/embed/MiFb3f6QlgM"
              title="Правила поведінки у випадку виявлення вибухонебезпечних та підозрілих предметів"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <h4 className={styles.name_video}>Правила поведінки у випадку виявлення вибухонебезпечних та підозрілих предметів</h4>
            <p className={styles.descript_video}>Навчальне Відео</p>
          </div>
          <div className={styles.wrap_video_cont}>
            <iframe
              className={styles.video_frame}
              src="https://www.youtube.com/embed/8XJ4Ibusnd4"
              title="Правила поведінки цивільного населення під час війни, військового стану."
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <h4 className={styles.name_video}>Правила поведінки цивільного населення під час війни, військового стану.</h4>
            <p className={styles.descript_video}>Навчальне Відео</p>
          </div>
          <div className={styles.wrap_video_cont}>
            <iframe
              className={styles.video_frame}
              src="https://www.youtube.com/embed/a9sFS6lE968"
              title="Короткометражний сюжет про правила евакуації у навчальних закладах"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            
            <h4 className={styles.name_video}>Короткометражний сюжет про правила евакуації у навчальних закладах</h4>
            <p className={styles.descript_video}>Навчальне Відео</p>
          </div>
          <div className={styles.wrap_video_cont}>
            <iframe
              className={styles.video_frame}
              src="https://www.youtube.com/embed/g3dr-JFxqcc"
              title="Як зупинити кровотечу! Перша медична допомога!"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <h4 className={styles.name_video}>Як зупинити кровотечу! Перша медична допомога!</h4>
            <p className={styles.descript_video}>Навчальне Відео</p>
          </div>
        </div>
      </div>
    </section>
  );
};
