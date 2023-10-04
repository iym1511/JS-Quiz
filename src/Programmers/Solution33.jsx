// 없는 숫자 더하기
const Solution33 = () => {

  const number = [1,2,3,4,6,7,8,0];

  const solution = (number) => {
    let answer = 0;

    for(let i = 0; i < 10; i++){
      if(!number.includes(i)){
        answer += i
      }
    }
    return answer;
  }

  console.log(solution(number))
  

  return (  
    <div>

    </div>
  );
}
 
export default Solution33;