// 계단오르기
const Sol1 = () => {
  
  const solution = (m) => {

    let dy = Array.from({ length: m+1 }, () => 0);
    let answer;

    dy[1]=1;
    dy[2]=2;
    for(let i = 3; i<=m; i++){
      dy[i] = dy[i-2]+dy[i-1]
    }
    console.log(dy)
    answer = dy[m];

    return answer
  }

  console.log(solution(7))

  return ( 
    <div>

    </div>
  );
}
 
export default Sol1;