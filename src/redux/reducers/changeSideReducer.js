import { CHANGE_SIDE } from '../../constants/action-type';

const initialState = {
    frontState : true
}

const changeSideReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_SIDE:
            {
                state.frontState = state.frontState ? false : true;
                return {
                    ...state,
                }   
            }
        default:
            return state;
    }
}

export default changeSideReducer;