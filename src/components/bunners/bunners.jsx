import styles from './bunners.module.css'
import bunner from '../../img/bunner.png'
import bunner2 from '../../img/bunner2.png'
export const Bunners = () => {
    return (
        <section className={styles.section_bunners}>
<div className={styles.cont}>
<img src={bunner} alt="bunner" className={styles.bunner_img}/>
<img src={bunner2} alt="bunner" className={styles.bunner_img}/>
</div>
        </section>
    )
}