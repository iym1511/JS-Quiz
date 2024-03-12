//  경로탐색(DFS-인접행렬 : 노드개수가 적을 때)

const Sol1 = () => {

  const arr = [[1,2], [1,3], [1,4], [2,1], [2,3], [2,5], [3,4], [4,2], [4,5]];

  const solution = (n, arr) => {
    let answer = 0;
    // 인접 행렬을 만들 2차원 배열
    let graph = Array.from((Array(n+1)), () => Array(n+1).fill(0));
    // 체그 배열
    let ch = Array.from({length : n+1}, () => 0);
    // 배열 확인용
    let path = [];
    // 2차원 배열에 해당하는 위치에 1로 표시
    arr.forEach(([a,b]) => {
      graph[a][b] = 1;
    })

    const DFS = (v) => {
      if(v === n){
        answer++;
        // console.log(path)
      }else{
        for(let i = 1; i<=n; i++){
          if(graph[v][i] === 1 && ch[i] === 0){
            // console.log(graph, ch)
            ch[i] = 1
            path.push(i);
            DFS(i)
            ch[i] = 0
            path.pop();
          }
        }
      }
    }
    path.push(1);
    // 1은 들린걸로 간주해야 중복으로 이동안함
    ch[1]=1
    DFS(1);

    return answer;
  }
  console.log(solution(5,arr));

  return ( 
    <div>

    </div>
  );
}

export default Sol1;