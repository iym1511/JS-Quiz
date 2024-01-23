// 합이 같은 부분집합(DFS : 아마존 인터뷰)
const Sol5 = () => {

  const arr = [1, 3, 5, 6, 7, 10];

  const solution = (arr) => {
    let answer="NO";
    let flag = 0;
    let total = arr.reduce((a,b) => a+b,0);
    let n = arr.length;
    
    const DFS = (L, sum) => {
      if(flag) return;
      if(L === n){
        if((total-sum) === sum){
          answer = "YES"
          flag = 1; // 중지시켜버림
          console.log("끝")
        }
      }else{
        DFS(L+1, sum+arr[L]) // 1.DFS(0+1, 0+1) / 2.DFS(1+1, 1+3) / 3.DFS(2+1, 4+5) / 4.DFS(3+1, 9+6) / 5.DFS(4+1, 15+7) / 6.DFS(5+1, 22+10){if(L===n)실행 -> 32-22 === 22 가 아니라서 백트래킹} / 11. DFS(4+1, 9+7) / 12. DFS(5+1, 16+10) if문이 작동하기때문에 백트래킹
        DFS(L+1, sum); // 7.DFS(5+1, 22)가 if문이 실행되기 때문에 백트래킹 DFS(4+1, 15+7) / 8. DFS(4+1, 15) else에서 DFS(5+1, 15+10) 실행 / 9. 8번이 if문에서 실행되어 DFS(5+1, 15)백트래킹  / 10. 이전에 DFS(5+1, 15+10)과 DFS(5+1, 15)은 검토했기 때문에 다시 이전단계인 DFS(3+1, 9+6) 즉 DFS(3+1,9)가 됨 / 13. 백트래킹되어 DFS(5+1, 16)이 됨으로써 끝
        console.log(L+1,sum);
      }
    }
    DFS(0, 0);

    return answer;
  }

  console.log(solution(arr));

  return ( 
    <div>

    </div>
  );
}

export default Sol5;