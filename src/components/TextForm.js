import React, {useState} from 'react'


export default function TextForm(props) {
    const [text,setText]=useState('')
    const [extractedEmail,setExtractedEmail]=useState(['Click Extract email button'])
    // const [extractSpaces,setExtractedSpace]=useState('click extract spaces')

    function onUpClick(){
        let upperCase=text.toUpperCase()
        setText(upperCase)

    }
    // function wordCals(text){
    //     // if(text.length===0)return 0;
    //     //  console.log(text.trim().split(" "))
    //     // let arr=text.trim().split(" ")
    //     // return arr.filter(ele=>ele!=="").length
    // }

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

    function onRemoveSpaces(){
        let newText=text.split(/[ ]+/)
       setText(newText.join(" "))
    }

    function onEmailExtract(){
        const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/g;
        const emails = text.match(emailRegex) || ['no email present'];
        console.log(emails)
        setExtractedEmail(emails.join(", "));
        
        props.showMsg("email extracted successfully","success")
        // setText(""+emails)
    }
    const onHandleCopy=()=>{
        let text=document.getElementById('formText')
        text.select()
        document.getSelection().removeAllRanges()
        navigator.clipboard.writeText(text.value)
         
        props.showMsg("copied successfully","success")
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
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <div>
            <h3>{props.title}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={onOnchange} id="formText" style={{backgroundColor:props.mode==='dark'?'#020826':'white', color:props.mode==='dark'?'white':'black'}}rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" disabled={text.length===0}onClick={onLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2 my-2" disabled={text.length===0}onClick={onReverseClick}>Reverse Text</button>
            <button className="btn btn-primary mx-2 my-2" disabled={text.length===0}onClick={onClearText}>Clear Text</button>
            <button className="btn btn-primary mx-2 my-2" disabled={text.length===0}onClick={onUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2 my-2" disabled={text.length===0}onClick={onHandleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2 my-2" disabled={text.length===0}onClick={onEmailExtract}>Extract email</button>
           <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={onRemoveSpaces}>remove extra spaces</button>
            

        </div>
    </div>
    <div className="container my-4">
        <h3>Your text summary:</h3>
        <p>{text.split(" ").filter((ele)=>ele.length!=0).length} words and {length(text)} letters</p>
        <p>{text.length===0?0:0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview:</h3>
        <p>{text}</p>
        <h3>Extracted emails:</h3>
        <h4 style={{color:"blue"}}>
            {extractedEmail}
             {/* <a href={`mailto:${extractedEmail}`}>{extractedEmail}</a> */}
        </h4>
    </div>
    </>
    
  )
}
