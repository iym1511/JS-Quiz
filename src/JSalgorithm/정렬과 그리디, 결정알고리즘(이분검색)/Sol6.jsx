// 장난꾸러기 현수
const Sol6 = () => {
  const arr = [120, 125, 152, 130, 135, 135, 143, 127, 160]

  const solution = (arr) => {
    let answer = [];
    let cpy = arr.slice();
    let srt = arr.sort((a,b) => a-b);
    for(let i=0; i<arr.length; i++){
      if(cpy[i] !== srt[i]){
        answer.push(i); // 문제에선 여기다 +1해서 출력
      }
    }

    return `키 정보 ${cpy[answer[0]]}가 현수이고, ${cpy[answer[1]]}이 현수 짝꿍입니다.`;
  }
  console.log(solution(arr))

  return ( 
    <div>

    </div>
  );
}

export default Sol6;