// 숫자의 표현
const Solution99 = () => {
  const num = 15;

  function solution(num) {
    var answer = 1;

    // Math.floor 는 굳이 사용 안해도 된다.
    for (let i = 1; i < Math.floor(num); i++) {
      let sum = 0;
      let j = i;
      
      while (sum < num) {
        sum += j;
        if (sum === num) {
          answer++;
          break;
        }
        j++;
      }

    }
    return answer;
  }

  console.log(solution(num))

  return <div></div>;
};

export default Solution99;
