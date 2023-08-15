import { useState } from "react";

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