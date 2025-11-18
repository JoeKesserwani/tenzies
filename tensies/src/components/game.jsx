import Numbers from "./numbers.jsx"
import React from "react"


export default function Tenzy(){
    
   const [num,setNum]= React.useState([{value:1,held:false}
    ,{value:2,held:false}
    ,{value:3,held:false}
    ,{value:4,held:false}
    ,{value:5,held:false}
    ,{value:6,held:false}
    ,{value:7,held:false}
    ,{value:8,held:false}
    ,{value:9,held:false}
    ,{value:10,held:false}])
    
    const [held,setHed]=React.useState(num.every(die=>die.held===true))

    const won=num.every(die=>die.value===num[0].value )
    


   function change(){
    if (won){
        console.log("congrats")
    }
    else{
    setNum(prev =>
    prev.map(die => {
    return die.held
      ? die
      : { ...die, value: Math.floor(Math.random() * 10)  };
     })
    )
    }
   }

    return(
        <section className="gameborder">
            <div className="game">
            <div className="buttons">
        <Numbers num={num[1]}/>
        <Numbers num={num[2]}/>
        <Numbers num={num[3]}/>
        <Numbers num={num[4]}/>
        <Numbers num={num[5]}/>
        <Numbers num={num[6]}/>
        <Numbers num={num[7]}/>
        <Numbers num={num[8]}/>
        <Numbers num={num[9]}/>
        <Numbers num={num[0]}/>
        <button className="change" onClick={change}>change numbers</button>
        </div>
        
        </div>
        </section>
    )
}