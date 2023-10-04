// 나머지가 1이 되는 수 찾기
const Solution31 = () => {

  const n = 11;

  function solution(n) {
    let arrays = [];
    let answer = 0;
    for(let i = 1; i<=n; i++){
      if(n % i == 1){
        arrays.push(i);
        answer = Math.min(...arrays);
      }
    }

    return answer;
  }

  console.log(solution(n))

  return <div></div>;
};

export default Solution31;
