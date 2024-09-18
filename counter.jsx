import { useState } from "react";

function Counter(){
  const [count,setCount] = useState(0);

function Counter()
{
    setCount(count+1);
    
}
function Sub()
{
  setCount(count-1);
}
function reset()
{
  setCount(0);
}
{
 return(
  <>
   <button onClick={Counter}>click me for increment</button>
   <button onClick={Sub}>click  me for sub</button>
   <button onClick={reset}>click me for reset</button>
   <h1>{count}</h1>;
  </> 
 )
}
}
export default Counter;
