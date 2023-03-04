import React from 'react';
import styles from './About.module.scss';

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.about__container}>
                <h3>О&nbsp;проекте</h3>
                <ul className={styles.about__description}>
                    <li>
                        <h4>Дипломный проект включал 5 этапов</h4>
                        <p>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные
                            доработки.</p>
                    </li>
                    <li>
                        <h4>На&nbsp;выполнение диплома ушло 5&nbsp;недель</h4>
                        <p>У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы
                            успешно защититься.</p>
                    </li>
                </ul>

                <ul className={styles.about__road}>
                    <li className={styles.about__road_first}>
                        <p>1&nbsp;неделя</p>
                        <span>Back-end</span>
                    </li>
                    <li className={styles.about__road_second}>
                        <p>4&nbsp;недели</p>
                        <span>Front-end</span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default About;