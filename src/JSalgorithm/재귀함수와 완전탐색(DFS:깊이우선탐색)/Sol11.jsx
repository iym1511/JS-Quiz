// 팩토리얼
const Sol11 = () => {
  const n = 5;

  const solution = (n) => {
    let answer = 1;
    function DFS(n) {
      if (n === 1) {
        return 1;
      }else {
        return n * DFS(n - 1);
      }
    }
  
    answer = DFS(5);

    return answer;
  };

  console.log(solution(n));

  return <div></div>;
};

export default Sol11;
