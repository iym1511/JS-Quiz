import { useState } from "react";

// 테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다. 

// 원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.

// 첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다. 
// 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.

const Quiz40 = () => {

  const [data, setData] = useState({
    limit : 0,
    personnel : 0
  });

  const [weight, setWeight] = useState()
  const [results, setResults] = useState([]);

  // 몸무게 제한
  const WeightLimit = (e) => {
    const { value } = e.target;
    setData((prev) => ({...prev, limit : value}));
  }

  // 인원수 제한
  const PersonnelLimit = (e) => {
    const { value } = e.target;
    setData((prev) => ({...prev, personnel : value}));
  }

  // 추가할 사람 몸무게 작성 
  const BodyWeightHandler = (e) => {
    const { value } = e.target;
    setWeight(Number(value));
  }

  // 몸무게 추가
  const BodyWeightAdd = () => {
    if(data.personnel > results.length){
      setResults((prev) => [...prev, weight]);
      setWeight("");
    }else{
      alert("입력한 인원수 만큼 입력하였습니다.")
    }
  }

  // 정해진 몸무게 까지 탈수있는 최대인원수 출력
  const maxWeight = () => {
    const filterdResults = [];
    let total = 0;
    results.sort((a, b) => a - b).map((a) => {
      if(total + a <= data.limit){
        filterdResults.push(a)
        total += a
      }
    })
    console.log(filterdResults.length)
  }

  return (  
    <div>
      <h1>JS퀴즈</h1>
      <p>몸무게 제한</p>
      <input type="text" value={data.limit} onChange={WeightLimit}/>
      <p>인원수 제한</p>
      <input type="text" value={data.personnel} onChange={PersonnelLimit}/>
      <p>탑승 가능 인원</p>
      <button onClick={maxWeight}>확인하기</button>
      <p>사람 몸무게 추가</p>
      <input type="text" value={weight} onChange={BodyWeightHandler}/>
      <button onClick={BodyWeightAdd}>추가</button>
      {
        results.map((a,i) => (
          <div>{a}</div>
        ))
      }
    </div>
  );
}

export default Quiz40;