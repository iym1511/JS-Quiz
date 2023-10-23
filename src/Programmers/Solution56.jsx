const Solution56 = () => {

  let n = 12;

  function solution(n) {
    let answer = 0;

    for(let i = 1; i<=n; i++){
      if(n % i === 0){
        answer += i
      }
    }

    return answer;
  }

  console.log(solution(n))

  return <div></div>;
};

export default Solution56;
