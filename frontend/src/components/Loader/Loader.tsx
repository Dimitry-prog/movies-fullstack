import React from 'react'
import styles from './Loader.module.scss';

const Loader = ({small}) => {
    return (
        <div className={`${styles.loader} ${small ? `${styles.loader__small}` : ``}`}>
            <span></span>
        </div>
    )
};

export default Loader