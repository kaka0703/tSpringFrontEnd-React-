import { useSelector, useDispatch } from 'react-redux';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'
import { fabric } from 'fabric'; // this also installed on your project
import { useState} from 'react';
import Layout from "../layout"
import DesignSide from '../components/design/design-side'
import DesignColorSelect from '../components/design/DesignColorSelect';
import "../assets/styles/design.scss"
import {changeSide} from '../redux/actions/index.js'
import {Color} from '../constants/color'
import {frontUrl, backUrl} from '../constants/url'

const Design = () => {

  const [isPreveiw, setPreview] = useState(false);
  const dispatch = useDispatch();
  const currentColor = useSelector(state => state.colorSelectReducer.currentSelectColor)
  const sideState = useSelector((state) => state.changeSideReducer.frontState)
  const { editor, onReady } = useFabricJSEditor();


  
  const onAddImage = (image) => {
    let virUrl = URL.createObjectURL(image);
    fabric.Image.fromURL(virUrl, function(img) {
      img.scaleToHeight(240)
      img.scaleToWidth(180)
      img.set({
          id: "image"
      });
      editor.canvas.centerObject(img);
      editor.canvas.add(img)
      editor.canvas.setActiveObject(img);
    })
  }

  const onAddText = () => {
    let text = new fabric.Textbox('Text', {
      editable: true,left: 80, top: 20, id: "text"
    })
    editor.canvas.centerObject(text);
    editor.canvas.add(text)
    editor.canvas.setActiveObject(text);
  }
  const onChangeSide = (ev) => {
    let oldData;
    if (ev.target.value === "Front") {
      oldData = JSON.stringify(editor.canvas.toJSON());
      localStorage.setItem("backObjects", oldData);
      console.log(localStorage.getItem("frontObjects"));
      editor.canvas.loadFromJSON(localStorage.getItem("frontObjects"), function(){
        editor.canvas.renderAll();
      })
      localStorage.removeItem("frontObjects")
    }  else if (ev.target.value === "Back") {
      oldData = JSON.stringify(editor.canvas.toJSON());
      localStorage.setItem("frontObjects", oldData);
      console.log(localStorage.getItem("backObjects"));
      if (localStorage.getItem("backObjects") === null)
      {
        editor.canvas.forEachObject(function(o) {
          editor.canvas.remove(o);
        });
        editor.canvas.renderAll();
      } else {
        editor.canvas.loadFromJSON(localStorage.getItem("backObjects"), function(){
          editor.canvas.renderAll();
        })
      }
      localStorage.removeItem("backObjects") 
    }
    if (isPreveiw)
    {
      editor.canvas.selection = false;
      editor.canvas.forEachObject(function(o) {
        o.selectable = false;
      });
    }
    dispatch(changeSide());
  } 

  const onPreviewBtn = () => {
    setPreview(true)
    if (editor.canvas.getActiveObjects()[0] !== undefined)
      localStorage.setItem("selectedObj", editor.canvas.getActiveObjects()[0].id);
    editor.canvas.discardActiveObject().renderAll();
    editor.canvas.selection = false;
    editor.canvas.forEachObject(function(o) {
      o.selectable = false;
    });
  
  }

  const onDesignBtn = () => {
    setPreview(false)
    let id = localStorage.getItem("selectedObj");
    editor.canvas.selection = true;
    editor.canvas.forEachObject(function(o) {
      o.selectable = true;
    });
    editor.canvas.getObjects().forEach((obj)=> {
      if (obj.id === id)
        editor.canvas.setActiveObject(obj);
    })
  }

  const onDeleteBtn = () => {
    let selectedObj = editor.canvas.getActiveObject();
    editor.canvas.remove(selectedObj);
    editor.canvas.renderAll();
  }

  return (
    <Layout>
        <div className="d-flex flex-row bd-highlight h-100 maindesign pb-4 ps-4">
          <div className='design-side'>
            <div className="header"></div>
            <div className="content h-100">
              <DesignSide onAddImage={onAddImage} onAddText={onAddText}></DesignSide>
            </div>
            <div className="footer"></div>
          </div>
          <div className="design-content d-flex  justify-content-around flex-row ml-5">
            <div className='pt-5'>
              <select onChange={onChangeSide}>
                <option value="Front">Front</option>
                <option value="Back">Back</option>
              </select>
            </div>
            <div className='d-flex flex-column justify-content-between'>
              <div className='font-picker d-flex flex-row'>
              </div>
              <div className='cloth-container'>
                <div style={{backgroundColor: Color[currentColor]}}>
                  <img id="bgp" src={sideState ? frontUrl : backUrl} alt="imgClothes"/>
                </div>
                <div className='canvas-container'>
                {
                  isPreveiw ? 
                  <FabricJSCanvas className="preview-canvas view-product" onReady={onReady} /> :
                  <FabricJSCanvas className="design-canvas view-product" onReady={onReady} />
                  }
                </div>
              </div>
              <div className='d-flex flex-row justify-content-around'>
                {/* <div className="btn-group" role="group" aria-label="Basic example"> */}
                  <button type="button" className="button btn-secondary bg-success" onClick={onPreviewBtn}>Preview</button>
                  <button type="button" className="button btn-secondary bg-primary" onClick={onDesignBtn}>Design</button>
                  <button type="button" className="button btn-secondary bg-danger" onClick={onDeleteBtn}>Delete</button>
                {/* </div> */}
              </div>
            </div>
            <DesignColorSelect></DesignColorSelect>
          </div>
        </div>
    </Layout>
  )
}
export default Design
