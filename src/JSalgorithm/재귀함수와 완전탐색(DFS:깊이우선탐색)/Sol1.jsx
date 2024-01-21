// 재귀함수
const Sol1 = () => {

  const solution = (num) => {
    let answer;
    const DFS = (L) => {
      if(L == 0) return;
      else {
        DFS(L-1);
        console.log(L)
      }
    }
    DFS(num)

    return answer;
  }

  console.log(solution(3))

  return ( 
    <div>

    </div>
  );
}

export default Sol1;