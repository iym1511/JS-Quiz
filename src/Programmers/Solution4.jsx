// 등차수열의 특정한 항만 더하기

import { useState } from "react";

const Solution4 = () => {

  const [result, setResult] = useState();

  let a = 3;
  let b = 4;
  let included = [true, false, false, true, true];

  // 내 풀이
  // function solution(a, b, included) {
  //   let result = 0;
  //   let sum = 0;
  //   for(let i = 0; i < included.length; i++){
  //     i === 0 ? (sum+=a) : (sum+=b); 
  //     if(included[i] === true){
  //       result += sum
  //     }
  //   }
  //   return result
  // }


  // 다른사람의 베스트 풀이
  // acc 누적값
  function solution(a, d, included) {
      const rst = included.reduce((acc, flag, i) => {
          return flag ? acc + a + (d * i) : acc
      }, 0)
      setResult((prev) => prev = rst);
    }
  

  return (  
    <div>
      <p>{result}</p>
      <button onClick={() => solution(a, b, included)}>버튼</button>
    </div>
  );
}

export default Solution4;