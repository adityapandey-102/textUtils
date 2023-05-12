import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        // console.log("button was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success")
    }
    const handleClear = () => {
        let newText = "";
        setText(newText)
    }

    const handleEmail = () => {
        let newText = String(text).split(" ").filter((element) => { return element.includes("@") && element.includes(".") });
        // let nt=[];
        // newText.forEach(element => {
        //     if (element.includes("@") && element.includes(".")) {
        //         nt.push(element);
        //     }
        // });
        setText(newText.join(", "))
        props.showAlert("Email is Extracted", "success")
    }
    const handleCopy = () => {
        // text.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied", "success")
    }
    const handleSpaces = () => {
        let newText = String(text).split(" ").filter((element) => { return element.length !== 0 });
        // let nt=[];
        // newText.forEach(element => {
        //     if (element.length>0) {
        //         nt.push(element)
        //     }
        // });
        setText(newText.join(" "))
        props.showAlert("Spaces are all Set", "success")
    }


    const handleOnChange = (event) => {
        // console.log("button was clicked")
        setText(event.target.value)

    }

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" style={{ backgroundColor: props.mode === 'dark' ? '#0a0e44' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnChange}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleEmail}>Email Extracter</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleSpaces}>Handle Spaces</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>Numbers of words: {String(text).split(/\s+/).filter((element) => { return element.length !== 0 }).length}</p>
                <p>Numbers of Characters: {text.length}</p>
                <p>Minutes to read: {(1 / 125) * String(text).split(" ").filter((element) => { return element.length !== 0 }).length} </p>
                <h2>Preview</h2>
                <div className="alert alert-info" style={{ backgroundColor: props.mode === 'dark' ? '#0a0e44' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} role="alert">
                    <p>{text.length > 0 ? text : "Enter the text to preview it here..."}</p>
                </div>
            </div>
        </>
    )
}
