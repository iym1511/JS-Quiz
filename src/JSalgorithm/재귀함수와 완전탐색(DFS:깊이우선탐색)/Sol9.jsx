// 동전교환
const Sol9 = () => {

  const arr = [1,2,5];

  const solution = (m, arr) => {
    let answer = Number.MAX_SAFE_INTEGER;
    let n = arr.length;

    const DFS = (L,sum) => {
      if(sum > m) return;
      if(L >= answer) return;

      if(sum === m){
        console.log(L,sum)
        answer = Math.min(answer, L)
      }else{
        for(let i=0; i<n; i++){
          // console.log(L+1, sum+arr[i])
          DFS(L+1, sum+arr[i]) // 1.DFS(0+1, 0+1) / 2.DFS(1+1, 1+2) / 3.DFS(2+1, 3+5)
        }
      }
    }
    DFS(0,0)

    return answer;
  }

  console.log(solution(15, arr));


  return ( 
    <div>

    </div>
  );
}

export default Sol9;