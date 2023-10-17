// 모의고사
const Solution48 = () => {
  console.log(3%10)
  const answers = [1, 3, 2, 4, 2];

  // 테케 틀려버린 내 코드
  // const solution = (answers) => {
  //   let answer = [];
  //   const Test1 = [1, 2, 3, 4, 5];
  //   const Test2 = [2, 1, 2, 3, 2, 4, 2, 5];
  //   const Test3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  //   let result = [];
  //   let lastResult = [];
  //   const sum = [Test1, Test2, Test3];
  //   let count = 0;

  //   for (let i = 0; i < sum.length; i++) {
  //     for (let j = 0; j < sum[i].length; j++) {
  //       if (sum[i][j] == answers[count]) {
  //         result.push(sum[i][j]);
  //       }
  //       count++;

  //       if (count == 5) {
  //         count = 0;
  //       }
  //     }
  //     lastResult.push(result.length);
  //     result = [];
  //   }

  //   for (let i = 0; i < lastResult.length; i++) {
  //     if (Math.max(...lastResult) === lastResult[i]) {
  //       answer.push(i + 1);
  //     }
  //   }

  //   return answer.sort((a,b) => a-b);
  // };


// 다른분 코드
function solution(answers) {
    let answer = [];
    let user = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];
    let point = [0,0,0]

    for(let i=0; i<answers.length; i++) {
      // 답과 일치한 user의 정답이 같으면 해당 위치 point 증가
        if(user[0][i%5] == answers[i]) {
            point[0]++;
        }
        if(user[1][i%8] == answers[i]) {
            point[1]++;
        }
        if(user[2][i%10] == answers[i]) {
            point[2]++;
        }
    }

    // 배열에서 가장 높은값을 추출
    let max = Math.max(...point);

    // 가장 많은 값만 출력하거나 같은 값들을 출력
    for(let i=0; i<3; i++) {
        if(point[i] == max)
            answer.push(i+1);
    }

    return answer;
}

  console.log(solution(answers));

  return <div></div>;
};

export default Solution48;
