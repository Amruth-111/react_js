import React from 'react'

export default function Alert(props) {
    function firstLetterCaps(str){
        let lower=str.toLowerCase()
        return lower.charAt(0).toUpperCase()+lower.slice(1)
    }
  return (
    props.alert && <div className ={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{firstLetterCaps(props.alert.type)}</strong>: {props.alert.msg} 
    </div> 
    
    
  )
}