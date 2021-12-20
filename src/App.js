
import {useState} from 'react';


let temp=0;

function App() {
  
  //  const [calc, setCal]=useState("");
   const [result, setResult]=useState("");
  const[value, setValue]=useState("");

  // const ops= ["+","-","/","*","^","="];
  
const click=(e)=>{
  // ops.forEach(function(k){
  //   if(k===e){
  //     temp2=1;
  //     value=value.slice(0,-1);
  //   }
    
  // })
  if(temp===0 ){
    
      setValue(value.concat(e));
    
  }
   else if(temp===1){
     temp=0;
    clear()
    
  }
 
}
const clear=()=>{
  setValue("");
  setResult("");
  temp=0;
}
const backSpace=()=>{
  setValue(value.slice(0,value.length-1)); // value.lenght-1 yerine -1
}
const calculate=()=>{
  try{
    // eslint-disable-next-line no-eval
    setResult(eval(value).toString());
  }
  catch(err){
    setResult("Error");
  }

  temp=1;
  
}

  return (
    <div className="App">
        <div className="calculator">
          <div className="display">
          <input className="firstInput" type="text" pattern="\d*" placeholder="0" value={value} onChange={(event)=>this.inputChangedHandler(event)} ></input>   
           {/* <input className="secondInput" type="text" placeholder="Sayı 2" value={value2}></input> */}
          <input className="result" type="text" placeholder="Sonuç" value={result} onChange={(event)=>this.inputChangedHandler(event)}></input>  
         
        </div> 
          <div className="first-row">
            <button  onClick={()=> clear()}> C </button>
            <button id="empty">  </button>
            <button id="empty">  </button>
            <button onClick={()=>backSpace()}> &larr; </button>
          </div>
          <div className="second-row"> 
            <button onClick={()=> click("7")}> 7 </button>
            <button onClick={()=> click("8")}> 8 </button>
            <button onClick={()=> click("9")}> 9 </button>
            <button onClick={()=> click("/")}> / </button>
          </div>
          <div className="third-row">
            <button onClick={()=> click("4")}> 4 </button>
            <button onClick={()=> click("5")}> 5 </button>
            <button onClick={()=> click("6")}> 6 </button>
            <button onClick={()=> click("*")}> x </button>
          </div>
          <div className="fourth-row">
            <button onClick={()=> click("1")}> 1 </button>
            <button onClick={()=> click("2")}> 2 </button>
            <button onClick={()=> click("3")}> 3 </button>
            <button onClick={()=> click("-")}> - </button>
          </div>
          <div className="fifth-row">
            <button onClick={()=> click(".")}> , </button>
            <button onClick={()=> click("0")}> 0 </button>
            <button onClick={()=> click("+")}> + </button>
            <button id='btn-equal' onClick={()=> calculate()}> = </button>
          </div>
        </div>

    </div>
  );
}

export default App;
