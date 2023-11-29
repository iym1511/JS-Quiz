// 올바른 괄호

const Solution97 = () => {
  const s = ")())(";
  // ")()("

  function solution(s) {
    const stack = []; // 1. )  2. )(  3. )  4. )) 5. ))(

    s.split('').map(string => {
      if (string === ")" && stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(string);
      }
    });

    return stack.length === 0;
  }

  console.log(solution(s));

  return <div></div>;
};

export default Solution97;
