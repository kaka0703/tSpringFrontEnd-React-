import { useSelector, useDispatch } from "react-redux";
import {changeCurrentColor} from '../../redux/actions'


const DesignColorSelect = () => {

    const dispatch = useDispatch();
    const colorSelectState = useSelector(state => state.colorSelectReducer.colorSelectState)
    console.log(colorSelectState);
    const onSelectColor = (ev) => {
        console.log(ev.target.id)
        let id = ev.target.id.slice(3);
        dispatch(changeCurrentColor(id))
      }
    return(
        <div className='d-flex flex-column justify-content-center'>
        <div className={`${colorSelectState[0] ? "" : "d-none"}`}>
          <div className='colorSelectButton mb-2'>
            <input type="checkbox" id="btn0" onClick={onSelectColor}></input>
            <label htmlFor="btn0" className='first'></label>
          </div>
        </div>
        <div className={`${colorSelectState[1] ? "" : "d-none"}`}>
          <div className='colorSelectButton  mb-2'>
            <input type="checkbox" id="btn1" onClick={onSelectColor}></input>
            <label htmlFor="btn1" className='second'></label>
          </div>
        </div>
        <div className={`${colorSelectState[2] ? "" : "d-none"}`}>
          <div className='colorSelectButton  mb-2'>
            <input type="checkbox" id="btn2" onClick={onSelectColor}></input>
            <label htmlFor="btn2" className='third'></label>
          </div>
        </div>
        <div className={`${colorSelectState[3] ? "" : "d-none"}`}>
          <div className='colorSelectButton  mb-2'>
            <input type="checkbox" id="btn3" onClick={onSelectColor}></input>
            <label htmlFor="btn3" className='forth'></label>
          </div>
        </div>
        <div className={`${colorSelectState[4] ? "" : "d-none"}`}>
          <div className='colorSelectButton  mb-2'>
            <input type="checkbox" id="btn4" onClick={onSelectColor}></input>
            <label htmlFor="btn4" className='fifth'></label>
          </div>
        </div>
        <div className={`${colorSelectState[5] ? "" : "d-none"}`}>
          <div className='colorSelectButton  mb-2'>
            <input type="checkbox" id="btn5" onClick={onSelectColor}></input>
            <label htmlFor="btn5" className='sixth'></label>
          </div>
        </div>
        <div className={`${colorSelectState[6] ? "" : "d-none"}`}>
          <div className='colorSelectButton  mb-2'>
            <input type="checkbox" id="btn6" onClick={onSelectColor}></input>
            <label htmlFor="btn6" className='seventh'></label>
          </div>
        </div>
        <div className={`${colorSelectState[7] ? "" : "d-none"}`}>
          <div className='colorSelectButton  mb-2'>
            <input type="checkbox" id="btn7" onClick={onSelectColor}></input>
            <label htmlFor="btn7" className='eighth'></label>
          </div>
        </div>   
        <div className={`${colorSelectState[8] ? "" : "d-none"}`}>
          <div className='colorSelectButton  mb-2'>
            <input type="checkbox" id="btn8" onClick={onSelectColor}></input>
            <label htmlFor="btn8" className='nineth'></label>
          </div>
        </div>
        <div className={` ${colorSelectState[9] ? "" : "d-none"}`}>
          <div className='colorSelectButton  mb-2'>
            <input type="checkbox" id="btn9" onClick={onSelectColor}></input>
            <label htmlFor="btn9" className='tenth'></label>
          </div>
        </div>
        <div className={`${colorSelectState[10] ? "" : "d-none"}`}>
          <div className='colorSelectButton  mb-2'>
            <input type="checkbox" id="btn10" onClick={onSelectColor}></input>
            <label htmlFor="btn10" className='eleventh'></label>
          </div>
        </div>
        <div className={`${colorSelectState[11] ? "" : "d-none"}`}>
          <div className='colorSelectButton  mb-2'>
            <input type="checkbox" id="btn11" onClick={onSelectColor}></input>
            <label htmlFor="btn11" className='twelveth'></label>
          </div>
        </div>
      </div>
    )
}

export default DesignColorSelect;