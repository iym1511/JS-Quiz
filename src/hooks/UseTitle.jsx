import { useState } from "react";
import { useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  }
  // title이 바뀌면 값 바로 적용
  useEffect(updateTitle , [title])
  return setTitle;
}

const UseTitle = () => {

  const titleUpdater = useTitle("...loading");

  // 3초 후 문서의 title 업데이트
  setTimeout(()=> titleUpdater("Home"),3000);

  return (  
    <div>

    </div>
  );
}

export default UseTitle;