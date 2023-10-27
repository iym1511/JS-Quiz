const Solution62 = () => {

  const a = 5;
  const b = 24;

  // const solution = (a, b) => {
  //   let answer = '';
  //   let week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  //   let day = [31,29,31,30,31,30,31,31,30,31,30,31];
  //   let sum = 0;
  //   let count = 0;

  //   for(let i = 0; i < a; i++){
  //     sum = day[i];
  //   }
    
  //   for(let i = 0; i < sum; i++){
      
  //     if(i != b){
  //       answer = week[count];
  //       console.log(count)
  //       if(count === week.length-1){
  //         count = 0;
  //       }else{
  //         count++
  //       }
  //     }else {
  //       break; // 조건이 만족하면 반복문 종료
  //     }
  //   }

  //   return answer;
  // }


  function solution(a, b) {
      const monthDay = [31,29,31,30,31,30,31,31,30,31,30,31]
      const weekDay = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]

      let days = b
      //  입력된 월(a) 이전의 모든 달에 대해 일 수를 더해줍니다. 
      // 반복문은 i가 0부터 시작하여 입력된 월 전까지 반복됩니다.
      for(let i=0 ; i<a-1 ; i++)
          days += monthDay[i];

          // (days % 7) 총 일 수에 따른 요일을 구할 수 있습니다.
      return weekDay[days%7];
  }

  console.log(solution(a, b));

  return (  
    <div>

    </div>
  );
}

export default Solution62;