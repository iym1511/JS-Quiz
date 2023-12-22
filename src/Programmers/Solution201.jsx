// 피로도(dfs)

const Solution201 = () => {
  const k = 80;
  const d = [
    [80, 20],
    [50, 40],
    [30, 10],
  ];

  // 15점짜리 다틀린코드
  // const solution = (k, dungeons) => {
  //   let answer = 0;

  //   let obj = {};
  //   for (let i = 0; i < dungeons.length; i++) {
  //     obj[dungeons[i][0] - dungeons[i][1]] = dungeons[i];
  //   }
  //   console.log(obj);

  //   Object.keys(obj)
  //     .sort((a, b) => b - a)
  //     .map((a) => {
  //       k -= obj[a][1];
  //       answer++;
  //     });
  //   console.log(k);

  //   return answer;
  // };

  // *재귀 호출이 이전 상태로 돌아가는 동작은 '백트래킹'*

  function solution(k, d) {
    const N = d.length;
    // N길이만큼 0을 채운 배열을만듦 [0,0,0]
    const visited = new Array(N).fill(0);
    let ans = 0;

    function dfs(k, cnt) {
      // 0. ans=0 / 4. ans=1 / 9. ans=2 
      ans = Math.max(cnt, ans);
      // console.log(ans)
      for (let j = 0; j < N; j++) {
        // 1. 80>=80 && 0(False) / 5. 60>=80 && 0(pass) / 6. 60>=50 && 0 / 10. 20>=80 && 1
        console.log(k, d[j][0])
        if (k >= d[j][0] && !visited[j]) {
          visited[j] = 1; // 2.[1,0,0] / 7.[1,1,0]
          dfs(k - d[j][1], cnt + 1); // 3. 60,1 / 8. 20,2
          visited[j] = 0;
        }
        // console.log(visited)
      }
    }

    dfs(k, 0);
    return ans;
  }
  console.log(solution(k, d));

  return <div></div>;
};

export default Solution201;
