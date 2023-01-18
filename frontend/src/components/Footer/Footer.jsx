import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <h5>Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.</h5>
                <nav>
                    <p>&copy; 2023</p>
                    <ul>
                        <li>
                            <a href="https://practicum.yandex.ru/english/?utm_source=google&utm_medium=cpc&utm_campaign=s_world_sales_brand&utm_content=143995311734&utm_term=%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%20%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D1%83%D0%BC%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5&gclid=CjwKCAiAzp6eBhByEiwA_gGq5JUsWa0u2FgR26rzZwOKVBqJ2AbtMMTY3E87MCkfHjhunfVz3sQr5hoC5sYQAvD_BwE"
                               target='_blank'
                               rel="noreferrer noopener">Яндекс.Практикум</a>
                        </li>
                        <li>
                            <a href="https://github.com/Dimitry-prog" target='_blank'
                               rel="noreferrer noopener">Github</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;