// 콜라츠 수열 만들기
const Solution15 = () => {
  const n = 10;

  function solution(n) {
    let answer = [];
    while(true) {
      answer.push(n);
      if (n % 2 === 0) {
        n/=2;
      } else {
        n = 3 * n + 1;
      }
      if(n == 1){
        answer.push(n)
        break;
    }
    }
    return answer;
  }

  console.log(solution(n));

  return <div></div>;
};

export default Solution15;
