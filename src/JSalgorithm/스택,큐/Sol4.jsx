// 후위식 연산(postfix)
const Sol4 = () => {
  const s = "352+*9-";

  const solution = (s) => {
    let answer = [];
    const stack = [];
    for (let x of s) {
      if (!isNaN(x)) {
        stack.push(Number(x));
      } else {
        // 먼저빠지는 오른쪽 stack.pop();
        // 나중에빠지는 왼쪽 stack.pop();
        let rt = stack.pop();
        let lt = stack.pop();
        if(x === "+") stack.push(lt+rt);
        if(x === "*") stack.push(lt*rt);
        if(x === "-") stack.push(lt-rt);
      }
    }
    answer = stack[0];

    return answer;
  };

  console.log(solution(s));

  return <div></div>;
};

export default Sol4;
