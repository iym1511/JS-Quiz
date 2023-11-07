// 대충 만든 자판
const Solution76 = () => {

  // function solution(keymap, targets) {
  //   let answer = [];
  //   let firstKey = [];
  //   let preKey = [];
  //   keymap.forEach((keymap) => {
  //     targets[0].split("").forEach((target1,i) => {
  //       if(firstKey.length != 4){
  //         firstKey.push(keymap.indexOf(target1));
  //       }else{
  //         // preKey.push(keymap.indexOf(target1));
  //         if(firstKey[i] > keymap.indexOf(target1)){
  //           console.log(keymap.indexOf(target1))
  //         }
  //       }
  //       // console.log(firstKey, preKey)
  //       // console.log(keymap.indexOf(target1))
  //     })
  //   })

  //   return answer;
  // }


  // 최소 영역 만들기 - 각각의 key마다의 최소 누를수 있는 횟수
  // 각각의 target마다의 최소 횟수 구하기
  // 접근할 수 없는 횟수를 시도한 것들은 -1로 필터링하고 리턴 

  // const keymap = ["ABACD", "BCEFD"];
  // const targets = ["ABCD", "AABB"];
  const keymap = ["AA"];
  const targets = ["B"];

  function solution(keymap, targets) {
    const minKeypad = {}

    keymap.forEach((keySet)=>{
        keySet.split('').forEach((key,idx)=>{
          // 1. A:1, B:2,  / 3.C:4, D:5 / 6. E:3 / 7. F:4
            if(minKeypad[key] === undefined){
                minKeypad[key] = idx + 1 // + 1 : 클릭 수 로 저장해야하기때문에 
              }
              else{
                // 중복되는 키패드의 해당 index만큼 증가시켜줌
                // 2. A 1,2+1 더작은것 1(유지) / 4. 두번째배열시작 (2,1)작은것 B:1
                // 5. (4,2) C:2  / 8. (5,5) D:5 
                minKeypad[key] = Math.min(minKeypad[key] , idx + 1)
              }
        })
    })

    // {A: 1, B: 1, C: 2, D: 5, E: 3, F: 4, D: 5}
    const unFilterAnswer = targets.map((target) => 
        target.split('').reduce((sum,val)=>{
        // 9. 기본0시작 > A:1 sum=1 > B:1 sum=2 > C:2 sum=4  
        // 총합 더하기 
        console.log(minKeypad[val])
        return  sum+minKeypad[val]
    },0));

    // keymap에 targets이 해당되어있지 않으면 -1 있으면 총결과값 return
    const filterAnswer = unFilterAnswer.map(minTried=>{
        return isNaN(minTried) ? -1 : minTried
    });

    return filterAnswer
  }

  console.log(solution(keymap, targets));

  return <div></div>;
};

export default Solution76;
