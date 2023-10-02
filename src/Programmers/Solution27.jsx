const Solution27 = () => {

  let st = "Progra21Sremm3";
  let s = 6;
  let e = 12;

  // reaplce(바꿀 문자열, 바꾸고싶은 문자열);
  const solution = (st, s, e) => {
    let answer = '';
    let str = st.slice(s, e+1);
    let chStr = st.slice(s, e).split("").reverse().join("");
    answer = st.replace(str, chStr);
  
    return answer;
  }

  console.log(solution(st, s, e));

  return (  
    <div>

    </div>
  );
}

export default Solution27;