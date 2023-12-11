import { useEffect } from "react";

const useNotification = (title, options) => {
  if(!("Notification" in window)){
    return;
  }

  const fireNotif = () => {
    if(Notification.permission !== "granted"){
      Notification.requestPermission().then(permission => {
        if(permission === "granted"){
          new Notification(title, options)
        }else {
          return ;
        }
      })
    }else {
      new Notification(title, options)
    }
  };

  return fireNotif;
}

const UseNotification = () => {

  // 옵션을 추가해서 이미지와 알림 메시지를 적용할 수 있다.
  const triggerNotif = useNotification("알림 출처",{
    body : "알림내용",
    icon : "https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=9046601&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNC8yMS9DTFM2L2FzYWRhbFBob3RvXzI0MTRfMjAxNDA0MTY=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10004"
  });

  useEffect(()=>{
    setTimeout(()=>{
      triggerNotif();
    },1500)
  },[])

  return (  
    <div>
      <button onClick={triggerNotif}>useNotification</button>
    </div>
  );
}
 
export default UseNotification;