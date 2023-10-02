// 문자열 앞의 n 글자
const Solution26 = () => {

  let st = "ProgrammerS123";
  let n = 11;

  function solution(st, n) {
    let answer = '';
    answer = st.slice(0, n);
    return answer;
  }

  console.log(solution(st,n))

  return (  
    <div>

    </div>
  );
}

export default Solution26;