// 숫자만 추출
const Sol3 = () => {

  const str = "g0en2T0s8eSoft";

  const solution = (s) => {
    let answer = "";

    // s = s.toLowerCase().replace(/[^0-9]/g,"")
    // answer = parseInt(s);

    // 강의내용 방법
    for(let x of s){
      if(!isNaN(x)){
        answer += x;
      }
    }

    return parseInt(answer);
  }

  console.log(solution(str));

  return (  
    <div>

    </div>
  );
}
 
export default Sol3;