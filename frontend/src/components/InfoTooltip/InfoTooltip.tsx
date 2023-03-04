import React from 'react';
import success from '../../images/succsessSign.svg';
import styles from './InfoTooltip.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {closeInfoTooltip} from '../../store/slices/modalSlice';
import {useNavigate} from 'react-router-dom';

const InfoTooltip = () => {
    const {isInfoTooltipOpen, infoTooltipMessage} = useSelector(state => state.modal);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCloseTooltip = () => {
        dispatch(closeInfoTooltip());
        navigate('/profile');
    };

    return (
        <div
            onClick={handleCloseTooltip}
            className={`${styles.tooltip} ${isInfoTooltipOpen ? `${styles['open']}` : ''}`}
        >
            <div>
                <button
                    onClick={handleCloseTooltip}
                    type='button' aria-label='close tooltip'
                >

                </button>
                <img src={success} alt="success"/>
                <h3>{infoTooltipMessage}</h3>
            </div>
        </div>
    );
};

export default InfoTooltip;