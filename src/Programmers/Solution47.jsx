// 명예의 전당
const Solution47 = () => {
  const test = [
    {
      id:1,
      q1: "질문1?",
      q2: "질문2?",
      q3: "질문3?",
    },
    {
      id:2,
      q1: "질문1?",
      q2: "질문2?",
      q3: "질문3?",
      q4: "질문4?",
      q5: "질문5?",
    },
  ];

  console.log(test.map((a) => a))

  const k = 4;
  const score = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];
  
  const solution = (k, score) => {
    let answer = [];
    let saveResult = [];

      for(let i = 0; i < score.length; i++){
        if(saveResult.length < k){
          saveResult.push(score[i]);
          saveResult.sort((a,b) => b-a);
          answer.push(saveResult[saveResult.length-1]);
        }else{

          if(Math.min(...saveResult) < score[i]){
            saveResult[saveResult.length - 1] = score[i]
            saveResult.sort((a,b) => b-a);
            answer.push(saveResult[saveResult.length-1]);
          }else{
            answer.push(saveResult[saveResult.length-1]);
          }

        }
      }
    return answer;
  };

  console.log(solution(k, score));

  return (  
    <div>
      <h1>테스트입니다.</h1>
      <div>
      {test?.map((a,i) => (
          <div key={i}>
            <span>{a.q1}</span>
            <span>{a.q2}</span>
            <span>{a.q3}</span>
            <span>{a.q4}</span>
            <span>{a.q5}</span>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default Solution47;