// 체육복
const Solution71 = () => {
  // const n = 3;
  // const lost = [3];
  // const reserve = [1];

  // const n = 5;
  // const lost = [2,4];
  // const reserve = [3];

  const n = 5;
  const lost = [2, 4];
  const reserve = [1, 3, 5];

  // function solution(n, lost, reserve) {
  //   let obj = {};
  //   let answer = 0;

  //   for(let i = 1; i<= n; i++){
  //     obj[i] = i;
  //   }

  //   lost.forEach((a) => {
  //     obj[a] = 0
  //   });

  //   reserve.forEach((a) => {
  //     if(obj[a - 1] == 0){
  //       obj[a - 1] = a;
  //     }
  //     else if(obj[a + 1] == 0){
  //       obj[a + 1] = a;
  //     }
  //   })

  //   for(let i = 1; i<=n; i++){
  //     if(obj[i] !== 0){
  //       answer+=1;
  //     }
  //   }

  //   return answer;
  // }

  function solution(n, lost, reserve) {
    const students = {};
    let answer = 0;
    // 체육복 하나씩 배정
    for (let i = 1; i <= n; i++) {
      students[i] = 1;
    }

    // 각 학생이 가지고있던 체육복에서 잃어버린사람 체육복 -1
    lost.forEach((number) => (students[number] -= 1));
    // 여유있는 학생의 채육복 +1
    reserve.forEach((number) => (students[number] += 1));

    for (let i = 1; i <= n; i++) {
      // index의 학생이 여유분이 있고 index의 -1 학생이 체육복이 0개일때 
      // 
      if (students[i] === 2 && students[i - 1] === 0) {
        students[i - 1]++; // -1 학생 체육복갯수 ++
        students[i]--; // 여유분있는 현재 index학생 -1
      } 
      // index의 학생이 여유분이 있고 index의 +1 학생이 체육복이 0개일때 
      else if (students[i] === 2 && students[i + 1] === 0) {
        students[i + 1]++; // +1 학생 체육복갯수 ++
        students[i]--; // 여유분있는 현재 index학생 -1
      }

    }

    // 객체 속성 key를 가져와서 체크
    // 학생의 체육복이 1개 이상일때 학생 수 ++
    for (let key in students) {
      console.log(key);
      if (students[key] > 0) {
        answer++;
      }
    }


    return answer;

  }

  console.log(solution(n, lost, reserve));

  return <div></div>;
};

export default Solution71;
