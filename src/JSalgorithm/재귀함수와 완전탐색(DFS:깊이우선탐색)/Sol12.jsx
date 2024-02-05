// 조합수(메모이제이션)
const Sol12 = () => {
  
  const n = 5;
  const r = 3;

  const solution = (n, r) => {
    let answer;
    // 행, 열
    let dy = Array.from(Array(8), ()=>Array(8).fill(0));
    const DFS = (n, r) => {
      if(dy[n][r] > 0) return dy[n][r];
      if(n === r || r === 0){
        return 1;
      }else {
        console.log(n-1,r-1,"or",n-1,r)
        // console.log(dy[n][r])
        console.log(DFS(n-1,r-1),"or",DFS(n-1,r));
        console.log(dy);
        return dy[n][r] = DFS(n-1, r-1) + DFS(n-1, r); // 1.DFS(4,2)+DFS(4,3) 2.DFS(3,1)+DFS(3,2) 3.DFS(2,0)+DFS(2,1)  4.DFS(1,0)+DFS(1,1)백트래킹 5.DFS(2,1)+DFS(2,2) 6.DFS(1,0)+DFS(1,1)백트래킹 7.DFS(3,2)+DFS(3,3)
      }
    }

    answer = DFS(n, r);
    return answer;
  }

  console.log(solution(n, r));

  return ( 
    <div>

    </div>
  );
}

export default Sol12;