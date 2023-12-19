// 타겟넘버 (DFS/BFS)
const Solution119 = () => {
  // const numbers = [1, 1, 1, 1, 1];
  // const target = 3;
  const numbers = [4, 1, 2, 1];
  const target = 4;

  // dfs를 이용한 풀이
  function solution(numbers, target) {
    const stack = [];

    const addTarget = (tried, sum, stack) => {
      console.log(tried, sum, stack)
      if (numbers.length === tried) {
        if (sum === target) {
          stack.push(true);
        }
        return;
      }
      // 1,4 / 2, 5 / 3, 7 / 4, 8
      addTarget(tried + 1, sum + numbers[tried], stack);
      // 1,-4 / 2, -5 / 3 -7 / 4, -8
      addTarget(tried + 1, sum - numbers[tried], stack);

    };
    // 1,4 / 2,
    addTarget(0, 0, stack);

    return stack.length;
  }

  console.log(solution(numbers, target));

  return <div></div>;
};

export default Solution119;
