import { useRef } from "react";

const useFullscreen = (callback) => {
  const element = useRef();

  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if(callback){
        callback(true)
      }
    }
  };

  const exitFull = () => {
    document.exitFullscreen();
    if(callback){
      callback(false)
    }
  }

  return {element, triggerFull, exitFull};
};

const UseFullscreen = () => {

  const onFullS = (isFull) => {
    console.log(isFull ? "we are full" : "we are small")
  }

  const {element, triggerFull, exitFull} = useFullscreen(onFullS);

  return (
    <div>
      <div ref={element}>
      <img
        src="https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=9046601&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004"
      />
      <button onClick={exitFull}>전체화면 나가기</button>
      </div>
      <button onClick={triggerFull}>전체화면</button>
    </div>
  );
};

export default UseFullscreen;
