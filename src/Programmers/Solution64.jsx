// 정수 내림차순으로 배치하기
const Solution64 = () => {

  const n = 118372;

  const solution = (n) =>{
    let answer = 0;
    let result = String(n).split("").sort().reverse().join("");
    answer = Number(result);

    return answer;
  }

  console.log(solution(n))

  return (  
    <div>

    </div>
  );
}

export default Solution64;