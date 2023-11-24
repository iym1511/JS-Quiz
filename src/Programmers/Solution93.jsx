// 2019 KAKAO BLIND RECRUITMENT 실패율

const Solution93 = () => {
  // 풀이 보고 다시하기



  // 3점짜리 내 코드
  // const solution = (N, stages) => {
  //   let answer = [];
  //   let list = [];
  //   let obj = {}
  //   let stagesLength = stages.length;

  //   for(let i = 1; i<=5; i++){
  //     for(let j = 0; j<=stages.length; j++){
  //       if(i === stages[j]){
  //         list.push(stages[j])
  //       }
  //     }

  //     if(stagesLength !== 0){
  //       obj[i] = list.length / stagesLength == undefined ? stagesLength :  list.length / stagesLength
  //     }
  //     console.log(obj,i,stagesLength)

  //     stagesLength -= list.length
  //     list = []

  //   }

  //   const sortedEntries = Object.entries(obj)
  //     .sort(([a, b], [c, d]) => {
  //       // 내림차순 정렬, 같은 경우 번호가 더 큰 수가 앞으로 가도록 정렬
  //       if (b === d) {

  //         return a - c;
  //       }
  //       return d - b;
  //     });

  //   sortedEntries.map(([a,b])=>{
  //     answer.push(Number(a))
  //   })

  //   return answer;
  // }

  const N = 5;
  const stages = [2, 1, 2, 6, 2, 4, 3, 3];
  // const stages = [4, 4, 4, 4, 4];

  function solution(N, stages) {
    const obj = {};
    // 1에서 N까지 객체를 만듦
    for (let i = 1; i <= N; i++) {
      obj[i] = 0;
    }

    // 스테이지에 머물고있는 인원 파악 count +1 씩
    // {1: 1, 2: 3, 3: 2, 4: 1, 5: 0}
    stages.forEach((a) => {
      if (a !== N + 1) {
        obj[a] += 1;
      }
    });
    console.log(obj)
    // 계산
    let stay = 0;
    let stayed = stages.length;
    const failPercentageArr = []; // 실패 확률

    // 객체의 key값을 for in문
    for (let key in obj) {
      stay = obj[key];
      // console.log(stay, "/", stayed);
      // stayed 가 0 이거나 key 의 value가 0 인경우
      if (stayed == 0 || stay == 0) {
        // 객체의 value에 전인원이 없으면 0
        failPercentageArr.push({ stage: key, fail: 0 });
      } else {  
        // key값, 스테이지 / 해당라운드 도전인원
        failPercentageArr.push({ stage: key, fail: stay / stayed });
      }
      // 라운드에 도전했던 사람수 만큼 제외
      stayed = stayed - stay;
    }

    // 정렬
    failPercentageArr.sort((a, b) => {
      if (b.fail > a.fail) {
        return 1;
      } else if (b.fail < a.fail) {
        return -1;
      } else if (b.fail == a.fail) {
        return a.stage - b.stage;
      }
    });
    
    // 정렬된 배열을 정수로 바꿔서 출력
    return failPercentageArr.map((v) => {
      return Number(v.stage);
    });
  }

  console.log(solution(N, stages));

  return <div></div>;
};

export default Solution93;
