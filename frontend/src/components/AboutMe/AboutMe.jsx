import React from 'react';
import styles from './AboutMe.module.scss';
import photo from '../../images/photo.jpg';

const AboutMe = () => {
    return (
        <article className={styles.aboutMe}>
            <div className={styles.aboutMe__container}>
                <h3>Студент</h3>
                <div className={styles.aboutMe__info}>
                    <div>
                        <h2>Дмитрий</h2>
                        <p className={styles.aboutMe__info_job}>Фронтенд-разработчик, 32&nbsp;лет</p>
                        <p className={styles.aboutMe__info_desc}>Я&nbsp;младший Frontend разработчик из&nbsp;Беларуси.
                            Мне очень нравится изучать JavaScript
                            и&nbsp;особенно React. Мне также нравится Css/Scss и&nbsp;его приемы.
                            Постоянно учусь новому, есть огромное желание развиваться в&nbsp;этой области и&nbsp;влиться
                            в&nbsp;работу. В&nbsp;веб-разработке нравится взаимодействие с&nbsp;пользователем и&nbsp;то,
                            что ты&nbsp;всегда видишь результат своей работы.
                        </p>
                        <a href="https://github.com/Dimitry-prog" target='_blank'
                           rel="noreferrer noopener">Github</a>
                    </div>
                    <img src={photo} alt="my photo"/>
                </div>
                <h5>Портфолио</h5>
                <ul>
                    <li>
                        <a href="https://dimitry-prog.github.io/sinauw/" target='_blank'
                           rel="noreferrer noopener">Статичный сайт</a>
                    </li>
                    <li>
                        <a href="https://dimitry-prog.github.io/simpleCloneTwitter/" target='_blank'
                           rel="noreferrer noopener">Адаптивный сайт</a>
                    </li>
                    <li>
                        <a href="https://dimitry-prog.github.io/starWars__React/" target='_blank'
                           rel="noreferrer noopener">Одностраничное приложение</a>
                    </li>
                </ul>
            </div>
        </article>
    );
};

export default AboutMe;