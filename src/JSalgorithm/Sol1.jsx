// 회문 문자열
const Sol1 = () => {

  let str = "gooG";

  const solution = (s) => {
    let answer = "YES";
    s = s.toLowerCase();
    let len = s.length;
    // let i = 0;

    // 강의내용 사용법 1
    for(let i =0; i<Math.floor(len/2); i++ ){
      if(s[i] !== s[len - i - 1]){
        return "NO"
      }
    }

    // 강의내용 사용법2 
    // if(s.split('').reverse().join !== s){
    //   return "NO"
    // }

    // 코테하면서 풀었던 방식으로도 사용 가능
    // for(let length = len-1; i < length; length--) {
    //     if(s[i] !== s[length]){
    //       return "NO"
    //     }else{
    //       i++
    //     }
    // }   

    return answer;
  }

  console.log(solution(str))

  return (  
    <div>

    </div>
  );
}
 
export default Sol1;