import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    isInfoTooltipOpen: false,
    infoTooltipMessage: '',
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isOpen = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
        },
        openInfoTooltip: (state, action) => {
            state.isInfoTooltipOpen = true;
            state.infoTooltipMessage = action.payload;
        },
        closeInfoTooltip: (state) => {
            state.isInfoTooltipOpen = false;
            state.infoTooltipMessage = '';
        },
    },
});

export const {openModal, closeModal, openInfoTooltip, closeInfoTooltip} = modalSlice.actions;

export default modalSlice.reducer;