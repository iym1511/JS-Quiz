// 약수의 개수와 덧셈
const Solution36 = () => {
  const left = 24;
  const right = 27;

  function solution(left, right) {
    let result = [];
    let answer = 0;

    for (let i = left; i <= right; i++) {
      for (let j = 1; j <= right; j++) {
        if (1 && i % j === 0) {
          result.push(j);
        }
      }
      if (result.length % 2 !== 0) {
        answer -= i;
      } else {
        answer += i;
      }
      // result의 길이를 구하기위한 배열초기화
      result = [];
    }
    return answer;
  }

  // 더욱 간단한 방법 (length를 count로 계산하여 구현)
  // function solution(left, right) {
  //   let answer = 0;

  //   for (let i = left; i <= right; i++) {
  //     let count = 0;
  //     for (let j = 1; j <= i; j++) {
  //       if (i % j === 0){
  //         count++;
  //       } 
  //     }
  //     if (count % 2) answer -= i;
  //     else answer += i;
  //   }

  //   return answer;
  // }

  console.log(solution(left, right));

  return <div></div>;
};

export default Solution36;
