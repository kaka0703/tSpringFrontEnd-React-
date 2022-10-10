import { PICKER_ENABLE_STATE } from '../../constants/action-type';

const initialState = {
    pickerState : false,
}

const pickerEnableState = (state = initialState, action) => {
    switch(action.type) {
        case PICKER_ENABLE_STATE:
            {
                return {
                    ...state,
                    pickerState : state.pickerState ? false : true,
                };
            }
        default:
            return state;
    }
}

export default pickerEnableState;