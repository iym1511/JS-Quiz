// 예상 대진표
const Solution112 = () => {
  const n = 8;
  const a = 4;
  const b = 7;

  function solution(n,a,b){
    var answer = 0;

    while(a !== b){
        a = Math.round(a/2);
        b = Math.round(b/2);
        answer++;
    }

    return answer;
}

  console.log(solution(n, a, b));

  return <div></div>;
};

export default Solution112;
