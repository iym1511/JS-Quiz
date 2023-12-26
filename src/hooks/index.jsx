import { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: [
      {
        id: "iym1511",
        name: "두루미",
        text: "ㅎㅇ",
      },
      {
        id: "iym1512",
        // name: "두루미2",
        text: "ㅎㅇ2",
      },
      {
        id: "iym1513",
        name: "두루미3",
        text: "ㅎㅇ3",
      },
    ],
  },

  {
    tab: "Section 2",
    content: "제품사진",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, SetCurrentIndex] = useState(initialTab); // 0
  // allTabs이 없거나 배열이 아닐경우 패쓰
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    // 원하는 탭의 index값을 전달하여 해당 탭의 정보 return
    currentItem: allTabs[currentIndex],
    changeItem: SetCurrentIndex,
  };
};

const UseHooksTest = () => {
  //   { 탭 정보, 탭index전달 } = useTabs(기본표시할 탭, 탭 콘텐츠)
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div>
      {/* index 전달을 위한 탭 버튼 */}
      {content.map((section, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}

      {/* 탭 안의 정보들 */}
      {/* 쇼핑몰 기준으로 탭에 리뷰,제품정보,리뷰사진 등등 있을경우 */}
      {/* 탭이 리뷰를 나타내는 배열일때 와 아닐때 를 구분지음 */}
      <div>
        {Array.isArray(currentItem.content) ? (
          currentItem.content.map((item) => (
            <div key={item.id}>
              <p>ID: {item.id}</p>
              {item.name && <p>Name: {item.name}</p>}
              <p>Text: {item.text}</p>
              <br/>
            </div>
          ))
        ) : (
          <div>{currentItem.content}</div>
        )
        }
      </div>
    </div>
  );
};

export default UseHooksTest;
