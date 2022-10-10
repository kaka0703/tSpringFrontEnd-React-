import {useRef} from 'react'
import { useSelector } from 'react-redux'
import '../../assets/styles/design.scss'
import SelectedColorView from './SelectedColorView'

import ColorPicker from './ColorPicker'
const DesignSide = ({onAddImage, onAddText}) => {

    const pickerState = useSelector(state => state.pickerEnableState.pickerState)
    const changeFileHandler = (ev) => {
       onAddImage(ev.target.files[0])
    }

    const fileInput = useRef();

    const selectFile = () => {
        fileInput.current.click();
    }
    const addText = () => {
        onAddText();
    }
    return (
        !pickerState ? 
        <div className="d-flex flex-column">
            <section>
                <div className='title required'>
                    Design Your Product
                </div>
                <div className='subtitle'>Max file size of 50MB</div>
                <div className='d-flex flex-row justify-content-between pt-2 pb-2'>
                    <span>
                        <input type="file" style={{ "display": "none" }}  onChange={changeFileHandler} ref={fileInput} />
                        <button onClick={selectFile} className='button addButton' >
                            <span>Add Image</span>
                        </button>
                    </span>
                    <button className='button addButton' onClick={addText}>
                        <span>Add Text</span>
                    </button>
                </div>
            </section>
            <section className='divider mb-2'></section>
            <section className='pt-2 mb-2'>
                <div className='title required'>Choose product Color</div>
                <div className='subtitle'>Select multiple background colors to offer</div>
                <div className="d-flex flex-row p-1">
                    <SelectedColorView></SelectedColorView>
                </div>
            </section>
            <section className='divider'></section>
            <div className='formGroup pt-2'>
                <div className='productionSection'>
                    <div className='sidePaneRow'>
                        <div>
                            <div className='title required'>Select First Image Buyers See</div>
                            <div className='subtitle'>Pick your featured view and color</div>
                        </div>
                    </div>
                    <div className='currentShotDescription'>
                        "Front View On Heathered Charcoal"
                        <button type="button" className='button'>Edit →</button>
                    </div>
                </div>
            </div>
            <section className='divider'></section>
            {/* <div className='formGroup'>
                <label for="price" className='title required'>Set Your Price</label>
                <div className='priceRegions'>
                    <div className='formGropup'>
                        <div className='regionTitle subtitle'>Price for products fulfilled from the US</div>
                    </div>
                    <div>
                        <div className='noMarginBottom'></div>
                         <div className='priceContainer'>
                            <span class="priceCurrency ">$</span>
                            <input typt="text" class="priceInput" value="25.99"></input>
                         </div>
                         <div className='profitDisplay'>$6.64 profit/sale</div>
                        <div className='sidePaneRow creatorsMessage subtitle italic'>
                            Tip: Most Creators price this product at:
                            <div className='creatorsTargetPricing'>$26.99</div>
                        </div>
                    </div>
                    <div className='formGroup'>
                        <div className='regionTitle subtitle'>
                            Price for products fulfilled from the EU
                            <div className='dropdown--popover currencyToggle'>
                                <div className='dropdown_toogle' role="button" tabIndex="0">
                                    EUR€
                                </div>
                                <div className='dropdown_menu'>
                                    <ul className='dropdow_menu_links'>
                                        <li className='dropdown_menu_item' role="button" tabIndex="0">
                                            EUR€
                                        </li>
                                        <li className='dropdown_menu_item' role="button" tabIndex="0">
                                            GBP£
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='vat-note subtitle'>
                    Selling price includes VAT
                    <div className='tooltip tooltip--topright vat-note-icon' data-too>

                    </div>
                </div>
            </div> */}
        </div> :
        <ColorPicker></ColorPicker>
    ) 

}

export default DesignSide;