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
        // console.log(L+1,sum)
        answer = Math.min(answer, L)
      }else{
        for(let i=0; i<n; i++){
          console.log(L+1, sum+arr[i], `arr[i] : ${arr[i]}`) 
          DFS(L+1, sum+arr[i]) // 1.DFS(0+1, 0+1) / 2.DFS(1+1, 1+2) / 3.DFS(2+1, 3+5)
          // 백트래킹 1.(14+1, 14+2 / 14+1, 14+5) 14끝 2.(13+1, 13+2 / 13+1, 13+5) 13끝백트래킹 3.(12+1, 12+2{14라서 for문다시 ->} / 13+1, 14+1)백트래킹 4.(13+1, 14+2백트래킹 / 13+1, 14+5백트래킹) 5.(12+1, 12+5백트래킹 /11+1, 11+2) 6.(12+1, 13+1 / 13+1, 14+1백트래킹) 추후 이대로반복
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