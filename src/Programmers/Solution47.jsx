// 명예의 전당
const Solution47 = () => {

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

    </div>
  );
}

export default Solution47;