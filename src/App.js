import { useState } from "react";

function App(){

const [num1,setNum1]=useState("");
const [num2,setNum2]=useState("");
const [result,setResult]=useState("");

function calculate(op){
let a=Number(num1);
let b=Number(num2);

switch(op){
case "+": setResult(a+b); break;
case "-": setResult(a-b); break;
case "*": setResult(a*b); break;
case "/": setResult(b!==0?a/b:"Error"); break;
}
}

return(
<div style={{textAlign:"center",marginTop:"50px"}}>

<h2>Calculator</h2>

<input placeholder="Number 1" onChange={(e)=>setNum1(e.target.value)}/>
<br/><br/>

<input placeholder="Number 2" onChange={(e)=>setNum2(e.target.value)}/>

<br/><br/>

<button onClick={()=>calculate("+")}>+</button>
<button onClick={()=>calculate("-")}>-</button>
<button onClick={()=>calculate("*")}>*</button>
<button onClick={()=>calculate("/")}>/</button>

<h3>Result: {result}</h3>

</div>
);
}

export default App;