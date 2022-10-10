import { PICKER_ENABLE_STATE, COLOR_SELECT, CURRENT_COLOR, CHANGE_SIDE} from '../../constants/action-type';

export const changeColorPickerState = () => ({
    type: PICKER_ENABLE_STATE,
});

export const changeColorSelectState = (colorId) => ({
    type : COLOR_SELECT,
    payload : colorId
})

export const changeCurrentColor = (colorId) => ({
    type : CURRENT_COLOR,
    payload : colorId
})

export const changeSide = () => ({
    type : CHANGE_SIDE,
})
