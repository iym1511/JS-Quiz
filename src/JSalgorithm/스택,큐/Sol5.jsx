// 쇠막대기(스택)
const Sol5 = () => {
  const s = "()(((()())(())()))(())";
  
  const solution = (s) => {
    let answer = 0;
    let stack = [];

    for (let i = 0; i < s.length; i++) {
      // 닫는괄호면 실행
      if (s[i] === ")") {
        stack.pop();
        // 현재괄호와 이전괄호가 ()이면 실행
        if (s[i - 1] === "(") {
          answer += stack.length;
        } else {
          // )로 막대기가 끝났으니 pop, +1
          answer += 1;
        }
      } else {
        // ( 면 계속 push
        stack.push(s[i]);
      }
    }
    return answer;
  };

  console.log(solution(s));

  return <div></div>;
};

export default Sol5;
