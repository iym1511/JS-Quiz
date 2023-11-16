import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";

const Test = () => {
  const [beerList, setBeerList] = useState([]); // 보여줄 전체 리스트
  const [offset, setOffset] = useState(0); // back에 요청할 페이지 데이터 순서 정보
  // offset 이후 순서의 데이터부터 12개씩 데이터를 받아올 것임
  const [target, setTarget] = useState(null); // 관찰대상 target
  const [isLoaded, setIsLoaded] = useState(false); // Load 중인가를 판별하는 boolean
  // 요청이 여러번 가는 것을 방지하기 위해서
  const [stop, setStop] = useState(false); // 마지막 데이터까지 다 불러온 경우 더이상 요청을 보내지 않기 위해서
  // 마지막 부분까지 가버릴 때 계속 요청을 보내는 것 방지


  useEffect(() => {
    let observer;
    if (target && !stop) {
      // callback 함수로 onIntersect를 지정
      observer = new IntersectionObserver(onIntersect, {
        threshold: 1,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target, isLoaded]);

    // isLoaded가 변할 때 실행
    useEffect(() => {
      // isLoaded가 true일 때 + 마지막 페이지가 아닌 경우 = 요청보내기
      if (isLoaded && !stop) {
        axios
          .get(`http://localhost:5000/data/page?page=${offset}`)
          .then((res) => {
            // 받아온 데이터를 보여줄 전체 리스트에 concat으로 넣어준다
            console.log(res)
            setBeerList((beerList) => [...beerList , ...res.data]);
            // 다음 요청할 데이터 offset 정보
            setOffset((offset) => offset + 1);
            // 다음 요청 전까지 요청 그만 보내도록 false로 변경
            setIsLoaded(false);

            if (res.data.length < 5) {
              // 전체 데이터를 다 불러온 경우(불러온 값이 12개 보다 적다면 -> 매번 12개씩 불러오기로 했으므로 해당 값보다 작으면 마지막 페이지) 아예 로드를 중지
              setStop(true);
            }
          });
      }
    }, [isLoaded]);

    const getMoreItem = () => {
      // 데이터를 받아오도록 true 로 변경
      setIsLoaded(true);
    };
  
    // callback
    const onIntersect = async ([entry], observer) => {
      // entry 요소가 교차되거나 Load중이 아니면
      if (entry.isIntersecting && !isLoaded) {
        // 관찰은 일단 멈추고
        observer.unobserve(entry.target);
        // 데이터 불러오기
        await getMoreItem();
        
        // 불러온 후 다시 관찰 실행
        observer.observe(entry.target);
      }
    };

  return (
    <div>
      <div>
        <label>버튼테스트</label>
        <div>
          {beerList?.map((a, i) => (
            <div key={i}>
              <div
                style={{
                  border: "1px solid red",
                  padding: "100px",
                  width: "200px",
                  margin: "auto",
                }}
              >
                {a.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div ref={setTarget}></div>
    </div>
  );
};

export default Test;
