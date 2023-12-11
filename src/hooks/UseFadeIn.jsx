import { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(()=> {
    if(element.current){
      const {current} = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, [])

  return {ref: element, style:{opacity: 0}};
}

const UseFadeIn = () => {

  const fadeInH1 = useFadeIn(1, 0.2);
  const fadeInP = useFadeIn(1, 0.2);

  return (  
    <div>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lorem ipsum lalalalala</p>
    </div>
  );
}

export default UseFadeIn;