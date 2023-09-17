const Solution1 = () => {

  function solution(players, callings) {
      let idx;
      let name1;
      let name2;
      const idxList = {}; // indexList
  
      // { "mumu": 0 }과 같은 형태로 출력
      players.forEach((name,index)=>idxList[name]=index);
      
      // 1 ~ 7 과정을 반복하며 호출에 따른 우선순위를 앞으로 보낸다
      for(let call of callings){
        // idxList에 일치하는 value의 index값
        idx = idxList[call]; // 1. 3
        name1 = players[idx]; // 2. kai
        name2 = players[idx-1] // 3. poe
        idxList[call]-=1; // 4. kai : 3-1 = 2
        idxList[name2]+=1; // 5. poe : 2+1 = 3
        players[idx] = name2 // 6. name2 = kai 자리에 poe
        players[idx-1] = name1 // 7. name1 = poe 자리에 kai
      }    
  
      return players;
  }
  
    const players = ["mumu", "soe", "poe", "kai", "mine"];
    const callings = ["kai", "kai", "mine", "mine"];
  
    // players[3] = kai : players의 3번째 index의 값을 'kai' 로 교체시켜준다.
    console.log(solution(players, callings));
  
    return <div></div>;
  };
  
  export default Solution1;
  