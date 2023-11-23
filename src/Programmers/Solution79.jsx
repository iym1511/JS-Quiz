const Solution79 = () => {

  // let survey = ["TR", "RT", "TR"];
  // let choices = [7, 1, 3];

  // 40점 짜리 내 코드 🥲
  // function solution(survey, choices) {
  //   var answer = "";
  //   let result = {};

  //   let asd = [
  //     ['R','T'],
  //     ['C','F'],
  //     ['J','M'],
  //     ['A','N']
  //   ]

  //   survey.forEach((a, i) => {
  //       if (choices[i] > 4) {
  //         result[a[1]] = choices[i] - 4;
  //         // 값이 없으면 0 추가
  //         if(result[a[0]] == undefined){
  //           result[a[0]] = 0;
  //         }

  //       } else {
  //         result[a[0]] = 4 - choices[i];
  //          // 값이 없으면 0 추가
  //         if(result[a[1]] == undefined){
  //           result[a[1]] = 0;
  //         }

  //         console.log(result);
  //       }
  //     });

  //     asd.forEach((a,i) => {
  //       if(result[a[0]] > result[a[1]]){
  //         answer += a[0];
  //       }else if(result[a[0]] == result[a[1]]){
  //         answer += a.sort()[0];
  //       }
  //       else{
  //         answer += a[1];
  //       }
  //     })

  //   return answer;
  // }



  // 기본 mbti 세팅
  // survey 순회하며 유형 점수 계산
  // 계산을 토대로 MBTI 우선순위 처리 (같을경우는 사전 순으로 처리 포함)

  let survey = ["AN", "CF", "MJ", "RT", "NA"];
  let choices = [5, 3, 2, 7, 5];

  function solution(survey, choices) {
    let answer = "";

    // 내가 써먹었던 방법
    const mbti = {
      R: 0,
      T: 0,
      C: 0,
      F: 0,
      J: 0,
      M: 0,
      A: 0,
      N: 0,
    };
    
    survey.forEach((surveyType, idx) => {
      // 이런식으로 0번째,1번째 index값을 가져올 수 있다.
      const [front, back] = surveyType.split("");
      // 내방식과 여기까진 똑같음
      if (choices[idx] < 4) {
        mbti[front] += Math.abs(choices[idx] - 4); // abs : 절댓값반환(양수=양수,음수=양수)
      } else if (choices[idx] > 4) {
        mbti[back] += Math.abs(choices[idx] - 4);
      }
    });

    // 이부분만 달랐다..
    // 문자열을 합칠 떄에는 += 보다 concat을 사용하자
    answer = answer.concat(mbti["R"] >= mbti["T"] ? "R" : "T");
    answer = answer.concat(mbti["C"] >= mbti["F"] ? "C" : "F");
    answer = answer.concat(mbti["J"] >= mbti["M"] ? "J" : "M");
    answer = answer.concat(mbti["A"] >= mbti["N"] ? "A" : "N");

    return answer;
  }

  console.log(solution(survey, choices));

  return <div></div>;
};

export default Solution79;
