// 파보나치 수
const Solution102 = () => {

  const n = 3;

  function solution(n) {
    let answer = 0;
    const number = [0, 1];
    for(let i = 2; i <= n; i++){
      // 0+1 % 1234567 = 1 / 1+1 % 1234567 = 2 
      number.push((number[i-1] + number[i-2]) % 1234567);
    }
    answer = number[n];

    return answer;
}

  console.log(solution(n))
  return <div></div>;
};

export default Solution102;
