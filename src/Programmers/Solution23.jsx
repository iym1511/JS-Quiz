// 문자열 뒤의 n글자
const Solution23 = () => {

  let my_string = "ProgrammerS123";
  let n = 11;

  const solution = (my_string, n) => {
    let answer = '';
    answer = my_string.split("").slice(-n).join("");
    return answer;
  }

  console.log(solution(my_string, n));

  return (  
    <div>

    </div>
  );
}

export default Solution23;