import { combineReducers } from 'redux';

import pickerEnableState from './pickerEnable';
import colorSelectReducer from './colorSelectReducer';
import changeSideReducer from './changeSideReducer'

export default combineReducers({
    pickerEnableState, colorSelectReducer, changeSideReducer
});