// 팰린드롬
const Sol2 = () => {

  let str="found7, time: study; Yduts; emit, 7Dnuof";
  // let str = "asdd s a"

  const solution = (s) => {
    let answer = "YES";
    // 알파벳 a-z까지에서 알파벳 소문자가 아닌것들 모두 '' 으로변경
    s = s.toLowerCase().replace(/[^a-z]/g,'');

    if( s.split('').reverse().join('') !== s ){
      return "NO"
    }

    return answer;
  }

  console.log(solution(str))

  return (  
    <div>

    </div>
  );
}
 
export default Sol2;