import { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
]

const useTabs = (initialTab, allTabs) => {

  const [currentIndex, SetCurrentIndex] = useState(initialTab); // 0
  // allTabs이 없거나 배열이 아닐경우 패쓰
  if(!allTabs || !Array.isArray(allTabs)){
    return;
  }

  return {
    currentItem : allTabs[currentIndex],
    changeItem : SetCurrentIndex
  };
}

const UseHooksTest = () => {

  const {currentItem, changeItem} = useTabs(0, content)

  return (  
    <div>
      {
        content.map((section,index) => (
          <button key={index} onClick={() => changeItem(index)}>{section.tab}</button>
        ))
      }
      <div>{currentItem.content}</div>
    </div>
  );
}
 
export default UseHooksTest;