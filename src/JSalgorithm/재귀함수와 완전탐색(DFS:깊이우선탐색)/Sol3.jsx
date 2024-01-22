// 이진트리순회(DFS:깊이우선탐색)
const Sol3 = () => {

  const solution = (v) => {
    let answer;
    const DFS = (v) => {
      if(v > 7){
        return;
      }else{
        console.log(v); // 전위
        DFS(v*2); // 왼쪽
        console.log(v); // 중위
        DFS(v*2+1); // 오른쪽
        console.log(v); // 후위
      }
    }
    DFS(v)
    return answer;
  }

  console.log(solution(1));

  return ( 
    <div>

    </div>
  );
}

export default Sol3;