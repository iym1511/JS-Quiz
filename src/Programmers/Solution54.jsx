// 이상한 문자 만들기
const Solution54 = () => {

  let s = "try hello world";

  const solution = (s) => {
    let answer = "";
    let sAry = s.split(" ");
    let result = [];

    for(let i = 0; i< sAry.length; i++){
      for(let j = 0; j < sAry[i].length; j++){
        if(j % 2 === 0) {
          result.push(sAry[i][j].toUpperCase());
        }else{
          result.push(sAry[i][j].toLowerCase());
        }
      }
      if(result.length < s.length){
        result.push(" ");
      }
    }
    

    return result.join("");
  }

  console.log(solution(s));
  
  return (  
    <div>

    </div>
  );
}

export default Solution54;