import { useState } from "react";
import useInfiniteScroll from "./useInfiniteScroll";
import useIssues from "./useIssues";

const IssuesList = () => {
  const { issues, moreData, getIssues, isLoaded} = useIssues();
  const [listLoaded, setListLoaded] = useState(false); // Load 중인가를 판별하는 boolean

  const target = useInfiniteScroll(async (entry, observer) => {
    observer.unobserve(entry.target); // 관찰을 멈추고(왜 여기다 한번 더 주는지는 잘 모르겠음)

    setListLoaded(true); // loading 메시지 출력
    // 1초후 로딩 메시지 헤제
    setTimeout(() => {
      setListLoaded(false);
    }, 1500);

    // moreData가 true, isLoaded가 false면 데이터 불러오기
    if (moreData && !isLoaded) {
      getIssues();
    }
  });
  
  return (
    <div>
      {issues.map((data, index) => (
        <div key={index}>
          <div
            style={{
              border: "1px solid red",
              padding: "100px",
              width: "200px",
              margin: "auto",
            }}
          >
            {data.name}
          </div>
        </div>
      ))}
      {listLoaded ? (
        <div
          style={{
            border: "1px solid gray",
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            margin: "auto",
            display:"flex",
            justifyContent:"center",
            flexDirection:"column"
          }}
        >
          ....loading
        </div>
      ) : moreData ? (
        <div ref={target}></div>
      ) : null}
    </div>
  );
};

export default IssuesList;
