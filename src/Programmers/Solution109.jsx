// 멀리뛰기
const Solution109 = () => {
  const n = 4;

  // 0 점
  // function solution(n) {
  //   let answer = 0;
  //   let sum = 0;
  //   for(let i = 1; i<=n; i++){
  //     sum += i
  //   }
  //   answer = Math.floor(sum/2) % 1234567
  //   return answer;
  // }

  function solution(n) {
    let a = 1,
      b = 2;
    for (let i = 3; i <= n; i++) {
      // 1. 1,2 = 2,1 / 3. 2,3
      [a, b] = [b, a];
      b = (a + b) % 1234567; // 2. 3 / 4. 5
    }
    return n == 1 ? 1 : b;
  }

  console.log(solution(n));

  return <div></div>;
};

export default Solution109;
