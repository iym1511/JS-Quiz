// 카펫

const Solution104 = () => {
  // const brown = 10;
  // const yellow = 2;
  const brown = 8;
  const yellow = 1;
  // const brown = 24;
  // const yellow = 24;

  // const solution = (brown, yellow) => {
  //   let answer = [];
  //   let sum = brown+yellow;

  //   for(let i = 1; i <= sum; i++){
  //     for(let j = 1; j<=sum; j++){
  //       if(i * j == sum && j <= i && answer.length < 2){
  //         answer.push(i);
  //         answer.push(j);
  //         break;
  //       }
  //     }
  //   }

  //   return answer;
  // }

  function solution(brown, yellow) {
    var answer = [];

    for (var i = 3; i <= (brown + yellow) / i; i++) {
      var x = Math.floor((brown + yellow) / i); // 1. 48/3 = 16 / 3. 48/4 = 12 / 5. 48/5 = 9 / 7. 48/6 = 8
      if ((x - 2) * (i - 2) === yellow) { // 2. 16 * 1 === yellow / 4. 10 * 2 === yellow / 6. 7 * 3 === yellow / 8. 6 * 4 === yellow
        break;
      }
    }

    return [x, i];

  }

  console.log(solution(brown, yellow));

  return <div></div>;
};

export default Solution104;
