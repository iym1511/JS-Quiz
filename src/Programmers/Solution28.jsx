// 세로 읽기
const Solution28 = () => {

  const my_str = "ihrhbakrfpndopljhygc";
  const m = 4;
  const c = 2;

  const solution = (my_str, m, c) => {
    let answer = '';
    // for문 i++가 아닌 4의 index배수만 이런식으로 사용가능
    for(let i = 0; i<my_str.length; i+=m){
        answer += my_str.slice(i, i+m)[c-1];
    }
    return answer
  }

  console.log(solution(my_str,m, c));

  return (  
    <div>

    </div>
  );
}
 
export default Solution28;