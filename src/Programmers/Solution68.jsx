// 문자열 다루기 기본
const Solution68 = () => {

  const s ="1234"

  const solution = (s) => {
    const reg = /^[0-9\s]*$/;
    if(!reg.test(s)){
      return false;
    }
    if(s.length !== 4 && s.length !== 6){
      return false;
    }
    return true
  }

  console.log(solution(s));

  return (  
    <div>

    </div>
  );
}

export default Solution68;