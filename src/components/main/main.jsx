import styles from "./main.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import photo1 from "../../img/photo1.jpg";
import photo2 from "../../img/photo2.jpg";
import photo3 from "../../img/photo3.jpg";
import photo4 from "../../img/photo4.jpg";
export const Main = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <main>
      <div className={styles.cont}>
        <div className={styles.text_cont}>
          <h2 className={styles.reviews}>Відгуки</h2>
          <p className={styles.reviews_desc}>
            У цьому розділі Ви можете знайти реальні коментарі <br /> від наших
            покупців
          </p>
        </div>
        <div className={styles.cont_for_reviewers} id="reviews">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            className={styles.swiper}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              {" "}
              <div className={styles.user_cont_review}>
                <div className={styles.wrap_for_avatar}>
                  <img
                    src={photo1}
                    alt="photo-people"
                    className={styles.photo_img}
                  />
                </div>
                <div className={styles.review_text_cont}>
                  <h2 className={styles.name_reviewer}>Дармороз Андрій </h2>
                  <p className={styles.opinion_rewiewer}>
                    Дуже сподобався цей міні прінтер, думав що якісь буде так як
                    в одноразового але ні! Дуже вражений, все гарно працює
                  </p>
                  <div className={styles.cont_for_score}>
                    <div className={styles.author}>
                      <svg
                        width="16.829102"
                        height="22.671387"
                        viewBox="0 0 16.8291 22.6714"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs />
                        <rect
                          id="Vector"
                          width="16.829268"
                          height="22.671354"
                          fill="#FFFFFF"
                          fill-opacity="0"
                        />
                        <path
                          id="Vector"
                          d="M3.1167 5.50586C3.1167 2.46509 5.48877 0 8.41455 0C11.3408 0 13.7129 2.46509 13.7129 5.50586C13.7129 8.54675 11.3408 11.0118 8.41455 11.0118C5.48877 11.0118 3.1167 8.54675 3.1167 5.50586ZM5.28809 13.4613C7.35938 13.1178 9.46973 13.1178 11.541 13.4613L11.7632 13.4982C14.6816 13.9822 16.8291 16.5984 16.8291 19.6697C16.8291 21.3275 15.5361 22.6714 13.9409 22.6714L2.88818 22.6714C1.29297 22.6714 0 21.3275 0 19.6697C0 16.5984 2.14746 13.9822 5.06592 13.4982L5.28809 13.4613Z"
                          fill="#FFFFFF"
                          fill-opacity="1.000000"
                          fill-rule="evenodd"
                        />
                      </svg>
                      <p>
                        <span>Автор</span>
                        <br />
                        Andriy
                      </p>
                    </div>
                    <div className={styles.number}>
                      <svg
                        width="21.951172"
                        height="22.671387"
                        viewBox="0 0 21.9512 22.6714"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs />
                        <rect
                          id="Vector"
                          width="21.951218"
                          height="22.671354"
                          fill="#FFFFFF"
                          fill-opacity="0"
                        />
                        <path
                          id="Vector"
                          d="M16.4917 15.9956C17.2222 15.8837 18.1636 15.8619 19.4561 15.8579C18.5366 18.1595 16.5923 19.8976 14.1978 20.4777L14.1924 20.479C14.2046 19.5189 14.2378 18.7784 14.3286 18.1804C14.4478 17.3979 14.6514 16.9657 14.9556 16.6517C15.2666 16.3304 15.6978 16.1173 16.4917 15.9956ZM14.5977 0.432861C12.2153 -0.144287 9.73584 -0.144287 7.35352 0.432861C3.9126 1.26648 1.22607 4.04102 0.418945 7.5946C-0.139648 10.0553 -0.139648 12.6161 0.418945 15.0768C1.22607 18.6302 3.9126 21.4049 7.35352 22.2384C9.35449 22.7233 11.4238 22.8009 13.4473 22.4713C13.8325 22.4084 14.2163 22.3308 14.5977 22.2384C18.0386 21.4049 20.7251 18.6302 21.5322 15.0768C22.0908 12.6161 22.0908 10.0553 21.5322 7.5946C20.7251 4.04102 18.0386 1.26648 14.5977 0.432861ZM6.77295 7.71851C6.77295 7.31897 7.08643 6.995 7.47314 6.995L10.9756 6.995C11.3623 6.995 11.6763 7.31897 11.6763 7.71851C11.6763 8.11804 11.3623 8.44189 10.9756 8.44189L7.47314 8.44189C7.08643 8.44189 6.77295 8.11804 6.77295 7.71851ZM6.77295 11.3357C6.77295 10.9362 7.08643 10.6122 7.47314 10.6122L13.3105 10.6122C13.6973 10.6122 14.0107 10.9362 14.0107 11.3357C14.0107 11.7352 13.6973 12.0591 13.3105 12.0591L7.47314 12.0591C7.08643 12.0591 6.77295 11.7352 6.77295 11.3357Z"
                          fill="#FFFFFF"
                          fill-opacity="1.000000"
                          fill-rule="evenodd"
                        />
                      </svg>
                      <p>
                        <span>Оцінка</span>
                        <br />5 із 5
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className={styles.user_cont_review}>
                <div className={styles.wrap_for_avatar}>
                  <img
                    src={photo2}
                    alt="photo-people"
                    className={styles.photo_img}
                  />
                </div>
                <div className={styles.review_text_cont}>
                  <h2 className={styles.name_reviewer}>Яцин Павло</h2>
                  <p className={styles.opinion_rewiewer}>
                    Замовив собі і хороший помічник у навчанні, все чудово
                    працює
                  </p>
                  <div className={styles.cont_for_score}>
                    <div className={styles.author}>
                      <svg
                        width="16.829102"
                        height="22.671387"
                        viewBox="0 0 16.8291 22.6714"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs />
                        <rect
                          id="Vector"
                          width="16.829268"
                          height="22.671354"
                          fill="#FFFFFF"
                          fill-opacity="0"
                        />
                        <path
                          id="Vector"
                          d="M3.1167 5.50586C3.1167 2.46509 5.48877 0 8.41455 0C11.3408 0 13.7129 2.46509 13.7129 5.50586C13.7129 8.54675 11.3408 11.0118 8.41455 11.0118C5.48877 11.0118 3.1167 8.54675 3.1167 5.50586ZM5.28809 13.4613C7.35938 13.1178 9.46973 13.1178 11.541 13.4613L11.7632 13.4982C14.6816 13.9822 16.8291 16.5984 16.8291 19.6697C16.8291 21.3275 15.5361 22.6714 13.9409 22.6714L2.88818 22.6714C1.29297 22.6714 0 21.3275 0 19.6697C0 16.5984 2.14746 13.9822 5.06592 13.4982L5.28809 13.4613Z"
                          fill="#FFFFFF"
                          fill-opacity="1.000000"
                          fill-rule="evenodd"
                        />
                      </svg>
                      <p>
                        <span>Автор</span>
                        <br />
                       Pawlo
                      </p>
                    </div>
                    <div className={styles.number}>
                      <svg
                        width="21.951172"
                        height="22.671387"
                        viewBox="0 0 21.9512 22.6714"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs />
                        <rect
                          id="Vector"
                          width="21.951218"
                          height="22.671354"
                          fill="#FFFFFF"
                          fill-opacity="0"
                        />
                        <path
                          id="Vector"
                          d="M16.4917 15.9956C17.2222 15.8837 18.1636 15.8619 19.4561 15.8579C18.5366 18.1595 16.5923 19.8976 14.1978 20.4777L14.1924 20.479C14.2046 19.5189 14.2378 18.7784 14.3286 18.1804C14.4478 17.3979 14.6514 16.9657 14.9556 16.6517C15.2666 16.3304 15.6978 16.1173 16.4917 15.9956ZM14.5977 0.432861C12.2153 -0.144287 9.73584 -0.144287 7.35352 0.432861C3.9126 1.26648 1.22607 4.04102 0.418945 7.5946C-0.139648 10.0553 -0.139648 12.6161 0.418945 15.0768C1.22607 18.6302 3.9126 21.4049 7.35352 22.2384C9.35449 22.7233 11.4238 22.8009 13.4473 22.4713C13.8325 22.4084 14.2163 22.3308 14.5977 22.2384C18.0386 21.4049 20.7251 18.6302 21.5322 15.0768C22.0908 12.6161 22.0908 10.0553 21.5322 7.5946C20.7251 4.04102 18.0386 1.26648 14.5977 0.432861ZM6.77295 7.71851C6.77295 7.31897 7.08643 6.995 7.47314 6.995L10.9756 6.995C11.3623 6.995 11.6763 7.31897 11.6763 7.71851C11.6763 8.11804 11.3623 8.44189 10.9756 8.44189L7.47314 8.44189C7.08643 8.44189 6.77295 8.11804 6.77295 7.71851ZM6.77295 11.3357C6.77295 10.9362 7.08643 10.6122 7.47314 10.6122L13.3105 10.6122C13.6973 10.6122 14.0107 10.9362 14.0107 11.3357C14.0107 11.7352 13.6973 12.0591 13.3105 12.0591L7.47314 12.0591C7.08643 12.0591 6.77295 11.7352 6.77295 11.3357Z"
                          fill="#FFFFFF"
                          fill-opacity="1.000000"
                          fill-rule="evenodd"
                        />
                      </svg>
                      <p>
                        <span>Оцінка</span>
                        <br />5 із 5
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className={styles.user_cont_review}>
                <div className={styles.wrap_for_avatar}>
                  <img
                    src={photo3}
                    alt="photo-people"
                    className={styles.photo_img}
                  />
                </div>
                <div className={styles.review_text_cont}>
                  <h2 className={styles.name_reviewer}>Анастасія Стоянович</h2>
                  <p className={styles.opinion_rewiewer}>
                    Гарна іграшка для моєї дитини, і дуже корисна
                  </p>
                  <div className={styles.cont_for_score}>
                    <div className={styles.author}>
                      <svg
                        width="16.829102"
                        height="22.671387"
                        viewBox="0 0 16.8291 22.6714"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs />
                        <rect
                          id="Vector"
                          width="16.829268"
                          height="22.671354"
                          fill="#FFFFFF"
                          fill-opacity="0"
                        />
                        <path
                          id="Vector"
                          d="M3.1167 5.50586C3.1167 2.46509 5.48877 0 8.41455 0C11.3408 0 13.7129 2.46509 13.7129 5.50586C13.7129 8.54675 11.3408 11.0118 8.41455 11.0118C5.48877 11.0118 3.1167 8.54675 3.1167 5.50586ZM5.28809 13.4613C7.35938 13.1178 9.46973 13.1178 11.541 13.4613L11.7632 13.4982C14.6816 13.9822 16.8291 16.5984 16.8291 19.6697C16.8291 21.3275 15.5361 22.6714 13.9409 22.6714L2.88818 22.6714C1.29297 22.6714 0 21.3275 0 19.6697C0 16.5984 2.14746 13.9822 5.06592 13.4982L5.28809 13.4613Z"
                          fill="#FFFFFF"
                          fill-opacity="1.000000"
                          fill-rule="evenodd"
                        />
                      </svg>
                      <p>
                        <span>Автор</span>
                        <br />
                        Nastya
                      </p>
                    </div>
                    <div className={styles.number}>
                      <svg
                        width="21.951172"
                        height="22.671387"
                        viewBox="0 0 21.9512 22.6714"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs />
                        <rect
                          id="Vector"
                          width="21.951218"
                          height="22.671354"
                          fill="#FFFFFF"
                          fill-opacity="0"
                        />
                        <path
                          id="Vector"
                          d="M16.4917 15.9956C17.2222 15.8837 18.1636 15.8619 19.4561 15.8579C18.5366 18.1595 16.5923 19.8976 14.1978 20.4777L14.1924 20.479C14.2046 19.5189 14.2378 18.7784 14.3286 18.1804C14.4478 17.3979 14.6514 16.9657 14.9556 16.6517C15.2666 16.3304 15.6978 16.1173 16.4917 15.9956ZM14.5977 0.432861C12.2153 -0.144287 9.73584 -0.144287 7.35352 0.432861C3.9126 1.26648 1.22607 4.04102 0.418945 7.5946C-0.139648 10.0553 -0.139648 12.6161 0.418945 15.0768C1.22607 18.6302 3.9126 21.4049 7.35352 22.2384C9.35449 22.7233 11.4238 22.8009 13.4473 22.4713C13.8325 22.4084 14.2163 22.3308 14.5977 22.2384C18.0386 21.4049 20.7251 18.6302 21.5322 15.0768C22.0908 12.6161 22.0908 10.0553 21.5322 7.5946C20.7251 4.04102 18.0386 1.26648 14.5977 0.432861ZM6.77295 7.71851C6.77295 7.31897 7.08643 6.995 7.47314 6.995L10.9756 6.995C11.3623 6.995 11.6763 7.31897 11.6763 7.71851C11.6763 8.11804 11.3623 8.44189 10.9756 8.44189L7.47314 8.44189C7.08643 8.44189 6.77295 8.11804 6.77295 7.71851ZM6.77295 11.3357C6.77295 10.9362 7.08643 10.6122 7.47314 10.6122L13.3105 10.6122C13.6973 10.6122 14.0107 10.9362 14.0107 11.3357C14.0107 11.7352 13.6973 12.0591 13.3105 12.0591L7.47314 12.0591C7.08643 12.0591 6.77295 11.7352 6.77295 11.3357Z"
                          fill="#FFFFFF"
                          fill-opacity="1.000000"
                          fill-rule="evenodd"
                        />
                      </svg>
                      <p>
                        <span>Оцінка</span>
                        <br />4 із 5
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className={styles.user_cont_review}>
                <div className={styles.wrap_for_avatar}>
                  <img
                    src={photo4}
                    alt="photo-people"
                    className={styles.photo_img}
                  />
                </div>
                <div className={styles.review_text_cont}>
                  <h2 className={styles.name_reviewer}>Анастасія Коцюбина</h2>
                  <p className={styles.opinion_rewiewer}>
                    Моя дитина дуже задоволена покупкою міні-принтера.
                    Рекомендую всім батькам для прідбання данного товару! Супер!
                    Дякую за товар та за швидку доставку!
                  </p>
                  <div className={styles.cont_for_score}>
                    <div className={styles.author}>
                      <svg
                        width="16.829102"
                        height="22.671387"
                        viewBox="0 0 16.8291 22.6714"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs />
                        <rect
                          id="Vector"
                          width="16.829268"
                          height="22.671354"
                          fill="#FFFFFF"
                          fill-opacity="0"
                        />
                        <path
                          id="Vector"
                          d="M3.1167 5.50586C3.1167 2.46509 5.48877 0 8.41455 0C11.3408 0 13.7129 2.46509 13.7129 5.50586C13.7129 8.54675 11.3408 11.0118 8.41455 11.0118C5.48877 11.0118 3.1167 8.54675 3.1167 5.50586ZM5.28809 13.4613C7.35938 13.1178 9.46973 13.1178 11.541 13.4613L11.7632 13.4982C14.6816 13.9822 16.8291 16.5984 16.8291 19.6697C16.8291 21.3275 15.5361 22.6714 13.9409 22.6714L2.88818 22.6714C1.29297 22.6714 0 21.3275 0 19.6697C0 16.5984 2.14746 13.9822 5.06592 13.4982L5.28809 13.4613Z"
                          fill="#FFFFFF"
                          fill-opacity="1.000000"
                          fill-rule="evenodd"
                        />
                      </svg>
                      <p>
                        <span>Автор</span>
                        <br />
                        Nastya
                      </p>
                    </div>
                    <div className={styles.number}>
                      <svg
                        width="21.951172"
                        height="22.671387"
                        viewBox="0 0 21.9512 22.6714"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <defs />
                        <rect
                          id="Vector"
                          width="21.951218"
                          height="22.671354"
                          fill="#FFFFFF"
                          fill-opacity="0"
                        />
                        <path
                          id="Vector"
                          d="M16.4917 15.9956C17.2222 15.8837 18.1636 15.8619 19.4561 15.8579C18.5366 18.1595 16.5923 19.8976 14.1978 20.4777L14.1924 20.479C14.2046 19.5189 14.2378 18.7784 14.3286 18.1804C14.4478 17.3979 14.6514 16.9657 14.9556 16.6517C15.2666 16.3304 15.6978 16.1173 16.4917 15.9956ZM14.5977 0.432861C12.2153 -0.144287 9.73584 -0.144287 7.35352 0.432861C3.9126 1.26648 1.22607 4.04102 0.418945 7.5946C-0.139648 10.0553 -0.139648 12.6161 0.418945 15.0768C1.22607 18.6302 3.9126 21.4049 7.35352 22.2384C9.35449 22.7233 11.4238 22.8009 13.4473 22.4713C13.8325 22.4084 14.2163 22.3308 14.5977 22.2384C18.0386 21.4049 20.7251 18.6302 21.5322 15.0768C22.0908 12.6161 22.0908 10.0553 21.5322 7.5946C20.7251 4.04102 18.0386 1.26648 14.5977 0.432861ZM6.77295 7.71851C6.77295 7.31897 7.08643 6.995 7.47314 6.995L10.9756 6.995C11.3623 6.995 11.6763 7.31897 11.6763 7.71851C11.6763 8.11804 11.3623 8.44189 10.9756 8.44189L7.47314 8.44189C7.08643 8.44189 6.77295 8.11804 6.77295 7.71851ZM6.77295 11.3357C6.77295 10.9362 7.08643 10.6122 7.47314 10.6122L13.3105 10.6122C13.6973 10.6122 14.0107 10.9362 14.0107 11.3357C14.0107 11.7352 13.6973 12.0591 13.3105 12.0591L7.47314 12.0591C7.08643 12.0591 6.77295 11.7352 6.77295 11.3357Z"
                          fill="#FFFFFF"
                          fill-opacity="1.000000"
                          fill-rule="evenodd"
                        />
                      </svg>
                      <p>
                        <span>Оцінка</span>
                        <br />5 із 5
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </main>
  );
};
