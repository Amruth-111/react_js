import React, {useState} from 'react'


export default function(props) {
    const [text,setText]=useState('enter text here')
    console.log(text)

    function onUpClick(){
        let upperCase=text.toUpperCase()
        setText(upperCase)

    }
    function onOnchange(e){
        setText(e.target.value)
    }
    
  return (
    <div className="container" >
        <div>
            <h3>{props.title}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={onOnchange} id="formText" rows="10"></textarea>
            </div>
            <button className="btn btn-primary" onClick={onUpClick}>Convert to uppercase</button>
        </div>
    </div>
  )
}
