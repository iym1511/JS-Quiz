// 바둑이 승차(이진트리DFS)
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
          console.log(sum)
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

  // 17줄 :  1.DFS(0+1, 0+81) / 2.DFS(1+1, 81+58) / 3.DFS(2+1, 139+42) / 4.DFS(3+1, 181+33) / 5.DFS(4+1, 214+61) 백트래킹
  // 18줄 :  6.DFS(4+1, 214) 백트래킹 / 7.DFS(3+1, 181+33) DFS(3+1, 181) / 8.DFS(4+1, 181+61)(결과값) 백트래킹  / 9.DFS(2+1, 139+42) DFS(2+1, 139)실행 / 10.DFS(3+1, 139+33) / 11.DFS(4+1, 172+61) 백트래킹 이후 반복

  console.log(solution(arr));

  return <div></div>;
};

export default Sol6;
