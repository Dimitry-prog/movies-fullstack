import React from 'react';
import styles from './Techs.module.scss';
import {techSkills} from '../../data/techSkills';

const Techs = () => {
    return (
        <section className={styles.techs}>
            <div className={styles.techs__container}>
                <h3>Технологии</h3>
                <h2>7&nbsp;технологий</h2>
                <p>На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном
                    проекте.</p>
                <ul>
                    {techSkills.map((skill, index) => (
                        <li key={index}>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Techs;