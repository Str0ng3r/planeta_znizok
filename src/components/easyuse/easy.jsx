import styles from "./easy.module.css";
import paper1 from '../../img/paper1.png'
import paper2 from '../../img/paper2.png'
import paper3 from '../../img/paper3.png'
import { useState } from "react";
export const Easy = () => {
  const [firstPaper,setFirstPaper] = useState(false)
  const [secondPaper,setSecondPaper] = useState(false)
  const [thriPaper,setThriPaper] = useState(false)
  return (
    <section className={styles.easy}>
      {firstPaper && 
      
      <div className={styles.window_paper}>
        <div className={styles.modal_paper}>
          <button className={styles.cross_button} onClick={()=> {setFirstPaper(false)}}>X</button>
          <img src={paper1} alt="photo" className={styles.modal_img}/>
          <div className={styles.modal_wrap_cont}>
<h3>Regular paper</h3>
<p>Звичайний матовий папір є найпоширенішим типом, який використовується 
для друку документів і підходить для більшості основних завдань друку.</p>
          </div>
        </div>
      </div> }
      {secondPaper && 
      
      <div className={styles.window_paper}>
        <div className={styles.modal_paper}>
          <button className={styles.cross_button} onClick={()=> {setSecondPaper(false)}}>X</button>
          <img src={paper2} alt="photo" className={styles.modal_img}/>
          <div className={styles.modal_wrap_cont}>
<h3>Sticker Paper</h3>
<p>Стикер-папір - це спеціальний матеріал, який використовується для друку стікерів або наклейок. Він має клейкий шар на зворотній стороні, що дозволяє легко прикріплювати його до різних поверхонь, таких як папір, картон, скло, пластик тощо. Стикер-папір доступний у різних розмірах і форматах, що робить його універсальним і зручним для використання в різних проектах. </p>
          </div>
        </div>
      </div> }
      {thriPaper && 
      
      <div className={styles.window_paper}>
        <div className={styles.modal_paper}>
          <button className={styles.cross_button} onClick={()=> {setThriPaper(false)}}>X</button>
          <img src={paper3} alt="photo" className={styles.modal_img}/>
          <div className={styles.modal_wrap_cont}>
<h3>Label Paper</h3>
<p>Папір для маркування - це спеціальний матеріал, який використовується для друку етикеток або ярликів. Він має гладку поверхню і зазвичай обробляється таким чином, щоб забезпечити якість друку і дозволити клеючому шару на етикетці легко прикріпитися до різних поверхонь, таких як папір, пластик, скло або метал. </p>
          </div>
        </div>
      </div> }

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
            <button className={styles.button_moredetail} onClick={()=> {setFirstPaper(true)}}>Детальніше</button>
          </div>
          <div className={styles.cont_paper}>
            <div className={styles.circle_blue}>
              <img src={paper2} alt="photo" />
            </div>
            <h3 className={styles.name_paper}>Sticker<br />paper</h3>
            <button className={styles.button_moredetail} onClick={()=> {setSecondPaper(true)}}>Детальніше</button>
          </div>
          <div className={styles.cont_paper}>
            <div className={styles.circle_purple}>
              <img src={paper3} alt="photo" />
            </div>
            <h3 className={styles.name_paper}>Label<br />paper</h3>
            <button className={styles.button_moredetail} onClick={()=> {setThriPaper(true)}}>Детальніше</button>
          </div>
        </div>
      </div>
    </section>
  );
};
