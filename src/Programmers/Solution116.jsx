// 기능개발
const Solution116 = () => {
  const progresses = [93, 30, 55];
  const speeds = [1, 30, 5];

  // const progresses = [95, 90, 99, 99, 80, 99];
  // const speeds = [1, 1, 1, 1, 1, 1];

  function solution(progresses, speeds) {
    let answer = [];
    // Math.ceil 소수점 있으면 올림
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];

    let tempCount = 0;
    for(let i = 0; i < days.length; i++) {
      // 처음 수인 7보다 낮으면 카운트증가
      if(days[i] <= maxDay) {
        tempCount++;
      } else {
        // 7이상일 시 maxDay가 더 높으값으로 바뀌며 카운트는 1이되고  push
        answer.push(tempCount);
        tempCount = 1;
        maxDay = days[i];
      }
    }
    answer.push(tempCount);
    
    return answer;
  }

  console.log(solution(progresses, speeds))

  return <div></div>;
};

export default Solution116;
