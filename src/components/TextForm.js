import React, {useState} from 'react'

export default function TextForm(props) 
{
const handleUpClick=()=>{
  // console.log("Upper case was clicked"+ text);
  let newText= text.toUpperCase();
  setText(newText)
  props.showAlert("Converted to uppercase","success");
}


const handleOnChange=(event)=>{
  // console.log("on changed");
  setText(event.target.value);
}


const handleLoClick=()=>{
  // console.log("Upper case was clicked"+ text);
  let newText= text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to lowercase","success");
}


const handleClearClick=()=>{
  // console.log("Upper case was clicked"+ text);
  let newText= '';
  setText(newText);
  props.showAlert("text has been clear","success");
}


const handleCapitalize = () => {
  let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
  setText(newText);
  props.showAlert("text has been capitalize","success");
}


const downloadTxtFile = () => {
  const element = document.createElement("a");
  const file = new Blob([text], {
    type: "text/plain"
  });
  element.href = URL.createObjectURL(file);
  element.download = "myFile.txt";
  element.click();
  props.showAlert("text has been downloaded","success");
}


  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control"  value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#13466e': 'white', color:props.mode=== 'dark'?'white': 'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalize}>Capitalize Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={downloadTxtFile}>Download Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      {/* <p>{text.split(/[^\s]+/).length-1} words and {text.length} characters</p> */}
      {/* <p>{0.008*text.split(/[^\s]+/).filter((element)=>{return element.length!==0}).length-1} Minutes Read</p> */}
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
