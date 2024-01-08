// 올바른 괄호(스택)
const Sol1 = () => {

  const a = "(()(()))(()";
  
  const solution = (a) => {
    let answer = "No";
    let stack = [];

    a.split('').map(string => {
      // 현재 push준비중인 값이 )이고 원래 들어가있던 마지막 값이( 즉 ()이면 pop
      if (string === ")" && stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(string);
      }
    });

    //아니면 그냥 string === "(" 일때 push하고 아닐때는 pop해주면됨

    if(stack.length === 0){
      return answer = "Yes"
    }

    return answer;
  }

  console.log(solution(a))

  return ( 
    <div>

    </div>
  );
}
 
export default Sol1;