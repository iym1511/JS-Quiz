const Solution87 = () => {
  const num = 16;

  function solution(num) {
    let answer = 0;
    let count = 0;

    while (num != 1) {
      if (num % 2 === 0) {
        num /= 2;
        count += 1
      } else if (num % 2 !== 0) {
        num *= 3;
        num += 1;
        count += 1
      }
    }
    if(count >= 500){
      return -1
    }

    return answer;
  }

  console.log(solution(num))

  return <div></div>;
};

export default Solution87;
