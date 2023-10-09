// 내적
const Solution38 = () => {

  let a = [1, 2, 3, 4];
  let b = [-3, -1, 0, 2];

  function solution(a, b) {
    let answer = 0;

    a.forEach((a,i) => answer += a * b[i])
    
    return answer;
  }

  console.log(solution(a, b));

  return <div></div>;
};

export default Solution38;
