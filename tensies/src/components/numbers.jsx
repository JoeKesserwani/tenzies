import React from"react"

export default function Numbers(props){
    const[clName,setClName]= React.useState("numb")
    
   function saveNum(){
    props.num.held= !props.num.held
    props.num.held? setClName("savednumb"):setClName("numb")
   }
    
      
    return(
        <button className={clName} onClick={saveNum} >{props.num.value}</button>
    )
}