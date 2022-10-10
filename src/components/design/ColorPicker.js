
import { useDispatch, useSelector } from 'react-redux';
import { changeColorPickerState, changeColorSelectState } from '../../redux/actions'


const ColorPicker = () => {
    const pickerState = useSelector(state => state.pickerEnableState.pickerState)
    const colorSelectState = useSelector(state => state.colorSelectReducer.colorSelectState)
    const dispatch = useDispatch();

    const onClickColorPicker = () => {
        console.log(pickerState);
        dispatch(changeColorPickerState());
    }
    const onChangeColorState = (ev) => {
        let id = ev.target.id.slice(3);
        console.log(ev.target.value);
        dispatch(changeColorSelectState(id));
    }

    return(
        <div className="d-flex flex-column justify-content-between h-100">
            <div className='mt-5'>
                <div className='d-flex justify-content-center'>
                    <p>Select Background Colors to Offer</p>
                </div>
                <div className="d-flex flew-row justify-content-around mt-5">
                    <div className='colorbutton'>
                            <input type="checkbox" id="col0" onChange={onChangeColorState} checked={colorSelectState[0]}></input>
                            <label htmlFor="col0" className='first'></label>
                    </div>
                    <div className='colorbutton'>
                            <input type="checkbox" id="col1" onChange={onChangeColorState} checked={colorSelectState[1]}></input>
                            <label htmlFor="col1" className='second'></label>
                    </div>
                    <div className='colorbutton'>
                            <input type="checkbox" id="col2" onChange={onChangeColorState} checked={colorSelectState[2]}></input>
                            <label htmlFor="col2" className='third'></label>
                    </div>
                    <div className='colorbutton'>
                            <input type="checkbox" id="col3" onClick={onChangeColorState} checked={colorSelectState[3]}></input>
                            <label htmlFor="col3" className='forth'></label>
                    </div>
                    <div className='colorbutton'>
                            <input type="checkbox" id="col4" onClick={onChangeColorState} checked={colorSelectState[4]}></input>
                            <label htmlFor="col4" className='fifth'></label>
                    </div>
                    <div className='colorbutton'>
                            <input type="checkbox" id="col5" onClick={onChangeColorState} checked={colorSelectState[5]}></input>
                            <label htmlFor="col5" className='sixth'></label>
                    </div>
                    <div className='colorbutton'>
                            <input type="checkbox" id="col6" onClick={onChangeColorState} checked={colorSelectState[6]}></input>
                            <label htmlFor="col6" className='seventh'></label>
                    </div>
                    <div className='colorbutton'>
                            <input type="checkbox" id="col7" onClick={onChangeColorState} checked={colorSelectState[7]}></input>
                            <label htmlFor="col7" className='eighth'></label>
                    </div>
                </div>
                <div className="d-flex flew-row justify-content-center mt-3">
                    <div className='colorbutton ms-2 me-2'>
                            <input type="checkbox" id="col8" onClick={onChangeColorState} checked={colorSelectState[8]}></input>
                            <label htmlFor="col8" className='nineth'></label>
                    </div>
                    <div className='colorbutton ms-2 me-2'>
                            <input type="checkbox" id="col9" onClick={onChangeColorState} checked={colorSelectState[9]}></input>
                            <label htmlFor="col9" className='tenth'></label>
                    </div>
                    <div className='colorbutton ms-2 me-2'>
                            <input type="checkbox" id="col10" onClick={onChangeColorState} checked={colorSelectState[10]}></input>
                            <label htmlFor="col10" className='eleventh'></label>
                    </div>
                    <div className='colorbutton ms-2 me-2'>
                            <input type="checkbox" id="col11" onClick={onChangeColorState} checked={colorSelectState[11]}></input>
                            <label htmlFor="col11" className='twelveth'></label>
                    </div>
                </div>
                
            </div>
            <div className='d-flex flew-row justify-content-center'>
                <button className='button closeColorPicker' onClick={onClickColorPicker}>Done</button>
            </div>
        </div>
    )
}

export default ColorPicker;