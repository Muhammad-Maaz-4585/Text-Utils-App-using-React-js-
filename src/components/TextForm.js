// import React, {useState} from 'react'

// export default function TextForm(props) {
//     const handleupclick = ()=>{
//         console.log("uppercase was clicked" + text);
//         let newtext = text.toUpperCase();
//         setText(newtext);
//     }
//     const handleOnChange = (Event)=>{
//         console.log("on change");
//         setText(Event.target.value);
//     }
// const [text, setText] = useState ('Enter Text Here');

//   return (
//     <div>
//         <h1>{props.heading}</h1>
//          <div className='mb-3'>
//          <textarea className='form-control' value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
//          </div>
//          <button className='btn btn-primary' onClick={handleupclick}>convert to Uppercase</button>
//     </div>
//   )
// }

import React, { useState } from 'react';

export default function TextForm(props) {
    // convert to uppercase
    const handleupclick = () => {
        console.log("uppercase was clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Convert to uppercase", "Success");
    };


    // free space
    const handleExtraSpace = () =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Clear free space", "Success");

    }


    // clear text
    const handleclearclick = () => {
        let newtext = ' ';
        setText(newtext);
        props.showAlert("text Remove", "Success");

    };


    
    // convert to lowecase
    const handleloweclick = () => {
        console.log("uppercase was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Convert to lowercase", "Success");

    };

    // copy text
    const copytext = () => {
        var text = document.getElementById("mybox");
        if(text) {
            text.select();
            navigator.clipboard.writeText(text.value)
                .then(() => {
                    console.log('Text copied to clipboard successfully');
                })
                .catch(err => {
                    console.error('Could not copy text to clipboard: ', err);
                });
        } else {
            console.error('Element with ID "mybox" not found.');
        }
        props.showAlert("copy text", "Success");
    };


    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    };

    const [text, setText] = useState('Enter Text Here');
    // matlab dadi che landi 1 sahi de aw bal ghalt de che kala taso text ki value change kawi no function ba liki 

    // text = "new text";wrong
    // setText = ("new text"); correct  


    return (
        <>
        <div className='container' style={{color: props.mode==='dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>

            <div className='mb-3'>
                <textarea className='form-control' style={{backgroundColor: props.mode==='dark' ? '#13466e' : 'white',color: props.mode ==='dark'?'white':'#042743'}} value={text} onChange={handleOnChange}  id="mybox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-primary mx-3' onClick={handleupclick}>convert to Uppercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-3 my-3' onClick={handleloweclick}>convert to lowercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-3 my-3' onClick={handleclearclick}>Cear Text</button>
            <button disabled={text.length===0} className='btn btn-primary mx-3 my-3' onClick={copytext}>copy Text</button>
            <button disabled={text.length===0} className='btn btn-primary mx-3 my-3' onClick={handleExtraSpace}>Remove Free Space</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
            <h2>Your text summary</h2>
            <p> {text.split(" ").filter((element)=>{return element.length!==0}).length} and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </p>
            <h3>preview</h3>
            <p>{text.length>0?text:"Nothing to Preview!"}</p>
        </div>
        </>
    );
}
