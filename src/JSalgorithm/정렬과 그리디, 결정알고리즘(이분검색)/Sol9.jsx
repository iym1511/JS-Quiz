// 결혼식
const Sol9 = () => {

  const arr = [[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];

  const solution = (arr) => {
    let answer = 0;
    let T_line = [];
    for(let x of arr){
      T_line.push([x[0], 's']);
      T_line.push([x[1], 'e']);
    }
    T_line.sort((a,b) => {
      // a[1],b[1]이 문자열이기때문에 아스키코드로 변환해줘야함
      if(a[0]===b[0]) return a[1].charCodeAt()-b[1].charCodeAt();
      else return a[0]-b[0];
    })
    console.log(T_line)
    // cnt로 최대로 겹칠때 값 answer에 전달
    let cnt = 0;
    for(let x of T_line){
      if(x[1] === 's') cnt++;
      else cnt--;
      answer = Math.max(answer, cnt);
    }

    return answer;
  }

  console.log(solution(arr))

  return ( 
    <div>

    </div>
   );
}
 
export default Sol9;