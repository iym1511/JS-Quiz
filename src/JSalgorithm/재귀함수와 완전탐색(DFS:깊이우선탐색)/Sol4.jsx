// 부분집합 구하기(이진트리 DFS)
const Sol4 = () => {
  const solution = (n) => {
    let answer = [];
    let ch = Array.from({ length: n + 1 }, () => 0);

    const DFS = (v) => {
      if (v === n + 1) {
        let tmp = "";
        for (let i = 1; i <= n; i++) {
          if (ch[i] === 1) tmp += i + " ";
        }
        if (tmp.length > 0) answer.push(tmp.trim());
      } else {
        ch[v] = 1;
        DFS(v + 1); // DFS(3+1)이 위의 if문이 작동하기 때문에 여기서부터 백트래킹 되어서 DFS(3+1)일때 v=3이니까 아래쪽 마저실행, ch[3]=0, 그리고 아래쪽DFS(3+1)재귀실행 push(1,2) / 또 백트래킹되어서 DFS(2+1)로 돌아가서 ch[2] = 0 되고 아래의 DFS(2+1)이 4가 되지않기때문에 재귀가 if말고 else에 걸려서 처음부분인 ch[2+1] = 1;에서 시작함 (이후 반복)
        ch[v] = 0; // 위의 재귀호출이 끝나서 백으로 여기서부터 시작 / 3부터1까지
        DFS(v + 1);
      }
    };
    DFS(1);
    return answer;
  };

  console.log(solution(3));

  return <div></div>;
};

export default Sol4;
