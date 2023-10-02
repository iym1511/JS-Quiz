// qr code
const Solution29 = () => {

  const q = 3;
  const r = 1;
  const code = "qjnwezgrpirldywt";

  const solution = (q, r, code) => {
    let answer = '';
    for(let i = 0; i<code.length; i++){
      // 2 % 3 은 3을 2로 못나누니 (몫)0, 그리고 그대로 내려오는 (나머지)2
      if(i % q === r){
        answer += code[i]
      }
    }

    return answer;
  }

  console.log(solution(q, r, code));

  return (  
    <div>

    </div>
  );

}

export default Solution29;