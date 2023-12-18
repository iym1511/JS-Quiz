// 스택/큐 프로세스

const Solution118 = () => {
  const proiorities = [2, 1, 3, 2];
  const location = 2;

  function solution(priorities, location) {
    let answer = 0;

    while (priorities.length > 0) {
      //  1. 첫번째 배열을 제거한 값
      let job = priorities.shift();
      // console.log(job, proiorities)
      // 2. 배열에서 첫번째 배열값보다 큰값이 있을때 실행 (2,1까지 실행)
      if (priorities.some((i) => i > job)) {
        priorities.push(job); // 3. 배열뒤에 첫번째 값을 되돌려넣음
        if (location == 0) location = priorities.length - 1;
        else location--; // 4. 2일때 location = 1 ,1일때 location = 0 
      } else { // 3이 나왔을경우 3보다 큰수는없어서 실행 3, [2,2,1]
        answer++;
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