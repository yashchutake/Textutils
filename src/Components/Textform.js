//import React from 'react'
import React, { useState } from 'react';


export default function Textform(props) {
     const handleUpperCase=() =>{
        let newText=Text.toUpperCase();
        setText(newText);
        //console.log("handleUpperCase click")
        props.showAlert("Converted to Uppercase!", "success");
      }

      const handleLowerCase=() =>{
        let newText=Text.toLowerCase();
        setText(newText);
        //console.log("handleUpperCase click")
        props.showAlert("Converted to Lowercase!", "success");
      }

      const handlecleartext=() =>{
        setText("");
        //console.log("handleUpperCase click")
        props.showAlert("Cleared text!", "success");
      }

      //Extra functionality
      const handlecopytext=() =>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copyed text!", "success");
      }

      const handleExtraSpace=() =>{
       let newText= Text.split(/[ ]+/);
       setText(newText.join(" "))
       props.showAlert("Extra Spaces Removed!", "success");
      }





      const handleOnChange=(event) =>{
        setText(event.target.value);

        //console.log("handleOnChange click")
      }

    const [Text, setText] = useState("");
     // text="new Text" //wrong
     //setText("new Text") //correct way
    return (
      <>
        <div>
            <div className="mb-3 my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h3 >{props.heading}</h3>
                <textarea className="form-control" onChange={handleOnChange}  value={Text} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpperCase} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLowerCase} >Convert to LowerCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handlecleartext} >Clear text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handlecopytext} >Copy text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace} >Remove Extra Spaces</button>

        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
          <h4>Your text summery</h4>
          <p><b>{Text.split(" ").length}</b> words and <b>{Text.length}</b> characters</p>
          <p><b>{0.008 * Text.split(" ").length.toFixed()}</b> Minutes required to read </p>
       
          <h4>Preveiw</h4>
          <p>{Text.length>0 ? Text : "Enter text in above text box to see preveiw here..." }</p>
       
        </div>

      </>
    )
}

