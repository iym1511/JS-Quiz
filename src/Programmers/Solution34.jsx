// 부족한 금액 계산하기
const Solution34 = () => {
  const price = 3;
  const money = 20;
  const count = 4;

  // 나의 코드
  // const solution = (price, money, count) => {
  //   let sum = 0;
  //   let answer = 0;
  //   for(let i = 0; i<count; i++){
  //     sum += price;
  //     answer += sum;
  //   }
  //   return answer < money ? 0 : answer - money;
  // }

  // 풀이의 코드
  function solution(price, money, count) {
    let answer = 0;

    for (let i = 1; i <= count; i++) {
      answer += price * i;
    }

    return answer > money ? answer - money : 0;
  }
  console.log(solution(price, money, count));

  return <div></div>;
};

export default Solution34;
