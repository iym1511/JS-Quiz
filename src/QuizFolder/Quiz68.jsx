const Quiz68 = () => {
  // const busTime = ["12:30", "13:20", "14:13"];
  // const time = prompt("현재 시간을 알려주세요");
  
  // const busTimesInDate = busTime.map(timeStr => {
  //   const [hours, minutes] = timeStr.split(":");
  //   const date = new Date();
  //   date.setHours(parseInt(hours, 10));
  //   date.setMinutes(parseInt(minutes, 10));
  //   return date;
  // });

  // const testFc = (currentTime) => {
  //   for (let i = 0; i < busTimesInDate.length; i++) {
  //     console.log(busTimesInDate[i].getHours());
  //   }
  // }

  // console.log(testFc(time));

  function solution(busTime, ruleTime){
    let answer = [];

    // : 기준으로 나눈다. (12:40 >> [12,40])
    ruleTime = ruleTime.split(':').map(n => parseInt(n, 10));
    // 12 * 60 = 720 + 40 = 760
    ruleTime = (ruleTime[0] * 60) + ruleTime[1];
  
    for (let i in busTime){
      // : 기준으로 나눈다 [12,30] [13,20] [14,13]
      let time = busTime[i].split(':').map(n => parseInt(n, 10));
      // 750 800 853
      time = (time[0] * 60) + time[1];

      // 750 800 853 < 760
      if (time < ruleTime){
        answer.push('지나갔습니다');
      } else{
        // 800 - 760 = 40 / 60 >> 0
        // 853 - 760 = 93 / 60 >> 1
        let hours = parseInt((time - ruleTime) / 60, 10);
        // 40 % 60 = 40
        // 93 % 60 = 33
        let minutes = (time - ruleTime) % 60;
        // 문자열변환 후 길이가 2보다 적으면 왼쪽부터 0으로 채워준다.
        answer.push(String(hours).padStart(2, 0) + '시간 ' + String(minutes).padStart(2, 0) + '분');
      }
    }
    return answer;
  }
  
  
  console.log(solution(["12:30", "13:20", "14:13"], "12:40"));

  return (  
    <>
    
    </>
  );
}
 
export default Quiz68;