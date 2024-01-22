// 부분집합 구하기(이진트리 DFS)
const Sol4 = () => {

  const solution = (n) => {
    let answer=[];
    let ch = Array.from({length : n+1},()=>0);
    
    const DFS = (v) => {
      if(v===n+1){
        let tmp = ""
        for(let i=1; i<=n; i++){
          if(ch[i] === 1) tmp+=i+" ";
        }
        if(tmp.length > 0) answer.push(tmp.trim());
        
      }else{
        ch[v] = 1;
        DFS(v+1);
        ch[v] = 0; // 위의 재귀호출이 끝나서 백으로 여기서부터 시작 / 3부터1까지
        DFS(v+1);
      }
    }
    DFS(1)
    return answer;
  }
  
  console.log(solution(3));

  return ( 
    <div>

    </div>
  );
}

export default Sol4;