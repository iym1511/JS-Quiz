const Solution67 = () => {
  const number = 10;
  const limit = 3;
  const power = 2;

  // function solution(number, limit, power) {
  //   let answer = 0;

  //   for (let i = 1; i <= number; i++) {
  //     let count = 0;
  //     // console.log(Math.sqrt(i))
  //     // 1 : 1,2,3 / 2 : 4,5,6,7,8 / 3 : 9,10
  //     for (let j = 1; j <= Math.sqrt(i); j++) {
  //       if (i % j === 0) {
  //         console.log(i,j)
  //         // 1. 1 / 2. 2
  //         count += (j * j === i) ? 1 : 2;
  //         console.log(count)
  //       }
  //     }
      
  //     if (count > limit) {
  //       count = power;
  //     }
      
  //     answer += count;
  //   }

  //   return answer;
  // }

// 내기준 좀 더 보기좋은 방법
// 10, 3, 2
function solution(number, limit, power) {
    let answer = 0;
    for (let i = 1; i <= number; i++){
        let count = 0;
        for (let j = 1; j * j <= i; j++){
            // (1). 1*1 == 1 : 1
            if (j * j == i) count++;
            // (2). 2 % 1 : +2 (j가 2면 j for문 실행 안함)
            else if (i % j == 0) {
              count += 2;
            }
          }
          
          // limit보다 count가 크면 power값으로 바꾼 후 answer에 추가
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








