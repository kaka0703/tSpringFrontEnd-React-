import { useDispatch, useSelector } from 'react-redux'
import { changeColorPickerState} from '../../redux/actions'
const SelectedColorView = () => {

    const colorSelectState = useSelector(state => state.colorSelectReducer.colorSelectState)
    const dispatch = useDispatch();

    const onClickColorPicker = () => {
        dispatch(changeColorPickerState());
    }
    return(
        <div className='d-flex flex-row justify-content-start  flex-wrap'>
            <div className={`${colorSelectState[0] ? "me-2" : "d-none"}`}>
                <div className='colorSelectButton mb-2'>
                    <input type="checkbox"></input>
                    <label className='first'></label>
                </div>
            </div>
            <div className={`${colorSelectState[1] ? "me-2" : "d-none"}`}>
                <div className='colorSelectButton  mb-2'>
                <input type="checkbox"></input>
                <label className='second'></label>
                </div>
            </div>
            <div className={`${colorSelectState[2] ? "me-2" : "d-none"}`}>
                <div className='colorSelectButton  mb-2'>
                <input type="checkbox"></input>
                <label className='third'></label>
                </div>
            </div>
            <div className={`${colorSelectState[3] ? "me-2" : "d-none"}`}>
                <div className='colorSelectButton  mb-2'>
                <input type="checkbox"></input>
                <label className='forth'></label>
                </div>
            </div>
            <div className={`${colorSelectState[4] ? "me-2" : "d-none"}`}>
                <div className='colorSelectButton  mb-2'>
                <input type="checkbox"></input>
                <label className='fifth'></label>
                </div>
            </div>
            <div className={`${colorSelectState[5] ? "me-2" : "d-none"}`}>
                <div className='colorSelectButton  mb-2'>
                <input type="checkbox"></input>
                <label className='sixth'></label>
                </div>
            </div>
            <div className={`${colorSelectState[6] ? "me-2" : "d-none"}`}>
                <div className='colorSelectButton  mb-2'>
                <input type="checkbox"></input>
                <label className='seventh'></label>
                </div>
            </div>
            <div className={`${colorSelectState[7] ? "me-2" : "d-none"}`}>
                <div className='colorSelectButton  mb-2'>
                <input type="checkbox"></input>
                <label className='eighth'></label>
                </div>
            </div>   
            <div className={`${colorSelectState[8] ? "me-2" : "d-none"}`}>
                <div className='colorSelectButton  mb-2'>
                <input type="checkbox"></input>
                <label className='nineth'></label>
                </div>
            </div>
            <div className={` ${colorSelectState[9] ? "me-2" : "d-none"}`}>
                <div className='colorSelectButton  mb-2'>
                <input type="checkbox"></input>
                <label className='tenth'></label>
                </div>
            </div>
            <div className={`${colorSelectState[10] ? "me-2" : "d-none"}`}>
                <div className='colorSelectButton  mb-2'>
                <input type="checkbox"></input>
                <label className='eleventh'></label>
                </div>
            </div>
            <div className={`${colorSelectState[11] ? "me-2" : "d-none"}`}>
                <div className='colorSelectButton  mb-2'>
                <input type="checkbox"></input>
                <label className='twelveth'></label>
                </div>
            </div>
            <input type="button" className='addColorButton' value="+" onClick={onClickColorPicker}>
            </input>
        </div>
    )
}

export default SelectedColorView;