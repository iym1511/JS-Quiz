import { useEffect } from "react";
import { useRef } from "react";

const useClick = (onClick) => {
  const element = useRef(null);
  useEffect(() => {
    if(element.current){
      element.current.addEventListener("click",onClick);
    }

    // 언마운트될때 끊어주기위해 return
    return () => {
      if(element.current){
        element.current.removeEventListener("click",onClick);
      }
    } 

  },[])
  return element;
} 

const UseClick = () => {

  const sayHello = () => console.log("hello");
  const title = useClick(sayHello);

  return (  
    <div>
      <h1 ref={title}>TEST</h1>
      <input type="text" placeholder="테스트"/>
    </div>
  );
}
 
export default UseClick;