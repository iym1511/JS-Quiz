// 3진법 뒤집기
const Solution39 = () => {

  const n = 45;

  const solution = (n) => {
    let answer = 0;
    const a = n.toString(3).split("").reverse().join("");
    answer = parseInt(a,3);

    return answer;
  }

  console.log(solution(n));

  return (  
    <div>

    </div>
  );
}
 
export default Solution39;