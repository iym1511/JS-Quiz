const Solution69 = () => {

  const n = 4

function solution(n) {
    let answer = '';
    for(let i = 1; i<=n; i++){
      if(i % 2 == 0){
        answer += '박';
      }
      if(i % 2 != 0){
        answer +='수'
      }
    }
    return answer;
}

console.log(solution(n));
// 아래 함수를 사용해도 가능
const waterMelon = n => "수박".repeat(n).slice(0,n);

  return (  
    <div>

    </div>
  );
}

export default Solution69;