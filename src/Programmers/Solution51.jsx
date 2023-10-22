// 과일장수

const Solution51 = () => {
  const k = 4;
  const m = 3;
  const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];

  // const k = 3;
  // const m = 4;
  // const score = [1, 2, 3, 1, 2, 3, 1];

  // function solution(k, m, score) {
  //   let answer = 0;
  //   let result = [];
  //   const min = Math.min(...score);
  //   const a = score.sort((a,b)=> b-a);

  //   for(let i = 0; i<score.length; i++){
  //     if(score.length % m !== 0 && result.length != m){
  //       if(min < a[i]){
  //         result.push(a[i]);
  //         // console.log(result)
  //       }else{
  //         result.push(a[i]);
  //       }

  //     }else{
  //       answer = Math.min(...result) * m * 1
  //       result = [];

  //     }

  //     // if(score.length % m === 0 && result.length != m){
  //     //   if(min < a[i]){
  //     //     result.push(a[i]);
  //     //     console.log(result)
  //     //   }else{
  //     //     result.push(a[i]);
  //     //   }
  //     // }else{
  //     //   answer = Math.min(...result) * m * 1
  //     //   result = [];

  //     // }

  //   }
  //   // console.log(result)

  //   return answer;
  // }

  // 다른 사람의 풀이
  function solution(k, m, score) {
    let answer = 0;
    const scoreConst = score.sort((a, b) => b - a);

    // 총 길이의 m의 배수만큼 for문 반복
    // i = 3-1 , 3 < 12, 2 += 3
    for (let i = m - 1; i < scoreConst.length; i += m) {
      // 1. 4 * 3 , 2. 4 * 3, 3. 2 * 3, 4. 1 * 3 = 12 + 12 + 6 + 3
      answer += scoreConst[i] * m;
    }

    return answer;
  }

  console.log(solution(k, m, score));

  return <div></div>;
};

export default Solution51;
