// 점프와 순간 이동
const Solution114 = () => {
  const n = 5000;

  // 홀수일때 -1을 해주어서 짝수에 맞추고
  // 짝수일때는 반으로 나눔
  function solution(n) {
    let answer = 0;
    while (n !== 0) {
      if (n % 2 === 0) {
        n /= 2;
      } else {
        n--;
        answer++;
      }
    }
    return answer;
  }

  console.log(solution(n));

  return <div></div>;
};

export default Solution114;
