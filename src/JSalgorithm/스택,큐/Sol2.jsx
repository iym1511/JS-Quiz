// 괄호 문자 제거(스택)
const Sol2 = () => {

  const a = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
  
  const solution = (a) => {
    let answer;
    let stack = []
    
    for(let x of a){
      if(x === ")"){
        // stack.pop()이 "(" 가 나올때까지 뒷문자열을 빼줌
        while(stack.pop() !== "(");
      }else{
        stack.push(x)
      }
    }
    answer = stack.join("");
    return answer;
  }

  console.log(solution(a))

  return ( 
    <div>

    </div>
  );
}

export default Sol2;