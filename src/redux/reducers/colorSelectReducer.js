import { COLOR_SELECT, CURRENT_COLOR } from '../../constants/action-type';

const initialState = {
    currentSelectColor : 0,
    colorSelectState : [true, false, false, false,false, false, false, false, false, false,false, false]
}

const colorSelectReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case COLOR_SELECT:
            {
                console.log(action.payload);
                let id = Number(action.payload)
                 state.colorSelectState[id] = !state.colorSelectState[id];
                 state.currentSelectColor = state.colorSelectState[id] ? id : 0;
                 console.log(state);
                return {
                    ...state,
                    colorSelectState: [...state.colorSelectState]
                };
            }
        case CURRENT_COLOR:
            {
                let id = Number(action.payload)
                state.currentSelectColor = id;
                return {
                    ...state,
                };
            } 
        default:
            return state;
    }
}

export default colorSelectReducer;