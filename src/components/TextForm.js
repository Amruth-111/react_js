import React, {useState} from 'react'


export default function(props) {
    const [text,setText]=useState('')
    const [extractedEmail,setExtractedEmail]=useState(['click extract email'])
    const [extractSpaces,setExtractedSpace]=useState('click extract spaces')

    function onUpClick(){
        let upperCase=text.toUpperCase()
        setText(upperCase)

    }

    function onLoClick(){
        let lowerCase=text.toLowerCase()
        setText(lowerCase)
    }

    function onOnchange(e){
        setText(e.target.value)
    }

    function onReverseClick(){
        setText(text.split("").reverse().join(""))
    }

    function onClearText(){
        setText("")
    }

    function onCalculateSpaces(){
        let count=0;
        for(let i=0; i<text.length;i++){
            if(text[i]==" "){
                count++
            }
        }
       setExtractedSpace(count)
    }

    function onEmailExtract(){
        const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/g;
        const emails = text.match(emailRegex) || ['no email present'];
        setExtractedEmail(emails);
        props.showMsg("email extracted successfully","success")
        // setText(""+emails)
    }

    function length(t){
        let count=0
        for(let i=0;i<t.length;i++){
            if(t[i]!==" "){
                count++
            }
        }
        return count
    }

  return (
    
    <>
    <div className="container" style={{color:props.mode=='dark'?'white':'black'}}>
        <div>
            <h3>{props.title}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={onOnchange} id="formText" style={{backgroundColor:props.mode=='dark'?'#020826':'white', color:props.mode=='dark'?'white':'black'}}rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={onUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={onLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={onReverseClick}>Reverse Text</button>
            <button className="btn btn-primary mx-2" onClick={onClearText}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={onEmailExtract}>Extract email</button>
            <button className="btn btn-primary mx-2" onClick={onCalculateSpaces}>number of space</button>
            

        </div>
    </div>
    <div className="container my-4">
        <h3>your text summary:</h3>
        <p>{text.split(" ").length} words and {length(text)} letters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview:</h3>
        <p>{text}</p>
        <h3>extracted email:{extractedEmail}</h3>
        <h3>number of spaces:{extractSpaces}</h3>
    </div>
    </>
    
  )
}
