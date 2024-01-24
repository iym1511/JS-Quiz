const Sol6 = () => {
  const arr = [81, 58, 42, 33, 61];

  const solution = (arr) => {
    let answer = 0;
    let n = arr.length;
    let max = 259;

    const DFS = (L, sum) => {
      if (sum > max) return;
      if (L === n) {
        if (sum < max) {
          answer = Math.max(answer, sum);
        }
      } else {
        DFS(L + 1, sum + arr[L]);
        DFS(L + 1, sum);
      }
    };
    DFS(0, 0);

    return answer;
  };

  console.log(solution(arr));

  return <div></div>;
};

export default Sol6;
