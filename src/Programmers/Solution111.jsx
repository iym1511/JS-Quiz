// n^2 배열 자르기
const Solution111 = () => {
  // const n = 3;
  // const left = 2;
  // const right = 5;


  // 시간초과
  // const solution = (n, left, right) => {
  //   const ary = [
  //     [0, 0, 0],
  //     [0, 0, 0],
  //     [0, 0, 0],
  //     [0, 0, 0]
  //   ];
  //   const arySave = [];

  //   for(let i = 0; i<n; i++){
  //     for(let j = 0; j<n; j++){
  //       if(i == 0){
  //         ary[i][j] = j+1
  //         console.log(ary)
  //       }

  //       if(i == 1 && j == 0){
  //         ary[i][j] = j+2
  //       }else if(i == 1 && j == 1){
  //         ary[i][j] = j+1
  //       }else if(i == 1 && j == 2){
  //         ary[i][j] = j+1
  //       }else if(i == 1 && j == 3){
  //         ary[i][j] = j+1
  //       }

  //       if(i == 2){
  //         ary[i][j] = i+1
  //       }
  //       if(i === 2 && j == 3){
  //         ary[i][j] = j+1
  //       }

  //       if(i === 3){
  //         ary[i][j] = n
  //       }

  //     }
  //   }
  //   // console.log(ary)
  //   return ary.flat().slice(left,right+1)
  // }

  const n = 4;
  const left = 7;
  const right = 14;

  function solution(n, left, right) {
    const answer = [];
    for (let i = left; i <= right; i++) {
      // divide : 몫, rest : 나머지
      const divide = Math.floor(i / n);
      const rest = i % n;

      if (divide >= rest) {
        answer.push(divide + 1);
      } else {
        answer.push(rest + 1);
      }
    }
    return answer;
  }

  console.log(solution(n, left, right));

  return <div></div>;
};

export default Solution111;
