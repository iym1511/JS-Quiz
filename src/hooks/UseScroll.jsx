import { useEffect, useState } from "react";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  
  const onScroll = (e) => {
    setState({y : window.scrollY, x : window.scrollX})
    console.log("y",window.scrollY, "x", window.scrollX);
  }

  useEffect(()=>{
    window.addEventListener("scroll",onScroll);
    return () => window.removeEventListener("scroll", onScroll)
  },[])

  return [state.x, state.y]
}

const UseScroll = () => {

  const [x, y] = useScroll();

  return (  
    <div style={{height:"1000vh"}}>
      <h1 style={{position:"fixed" ,color: y > 100 ? "red" : "blue"}}>hi</h1>
    </div>
  );
}
 
export default UseScroll;