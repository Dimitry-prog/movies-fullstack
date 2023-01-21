import React, {useEffect, useRef} from 'react';
import styles from './EditProfile.module.scss';

const EditProfile = () => {
    const nameRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    return (
        <section className={styles.profile}>
            <h2>Привет, Виталий!</h2>
            <form>
                <div>
                    <p>Имя</p>
                    <input
                        ref={nameRef}
                        type="text"/>
                </div>
                <div>
                    <p>E-mail</p>
                    <input type="text"/>
                </div>
                <span></span>
                <button type='submit' aria-label='submit form'>Сохранить</button>
            </form>
        </section>
    );
};

export default EditProfile;