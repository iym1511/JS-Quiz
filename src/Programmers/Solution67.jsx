const Solution67 = () => {
  const number = 10;
  const limit = 3;
  const power = 2;

  function solution(number, limit, power) {
    let answer = 0;

    for (let i = 1; i <= number; i++) {
      let count = 0;
      for (let j = 1; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          count += (j * j === i) ? 1 : 2;
        }
      }

      if (count > limit) {
        count = power;
      }

      answer += count;
    }

    return answer;
  }

  console.log(solution(number, limit, power));

  return <div></div>;
};

export default Solution67;








