// 스택/큐 프로세스

const Solution118 = () => {
  // const proiorities = [2, 1, 3, 2];
  // const location = 2;

  // 이 예시로 할 경우 1,1 까지 true에서 작용[9,1,1,1,1,1],location=5
  // 이후 location이 감소하는만큼 answer가 증가해서 결과는 5가 된다.
  const proiorities = [1, 1, 9, 1, 1, 1];
  const location = 0;

  function solution(priorities, location) {
    let answer = 0;

    while (priorities.length > 0) {
      //  1. 첫번째 배열을 제거한 값
      let job = priorities.shift();
      let someValue = priorities.some((i) => i > job)
      // 2. 배열에서 첫번째 배열값보다 큰값이 있을때 실행 (2,1까지 실행)
      if (someValue) {
        priorities.push(job); // 3. 배열뒤에 첫번째 값을 되돌려넣음
        console.log(priorities)
        if (location == 0) {
          location = priorities.length - 1;
          console.log("location :",location);
        }
        else {
        location--; // 4. 2일때 location = 1 ,1일때 location = 0 
        console.log("location :",location)
      }  
      } else { // 3이 나왔을경우 3보다 큰수는없어서 실행 3, [2,2,1]
        answer++;
        console.log(location,answer)
        if (location == 0) return answer; // location이 0이라서 1 return
        else location--;
      }

    }

    return answer;
  }

  console.log(solution(proiorities, location));

  return <div></div>;
};

export default Solution118;
