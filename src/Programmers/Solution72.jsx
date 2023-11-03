// 옹알이(2)
const Solution72 = () => {
  

  // 💊 75점짜리 빈약한 내 코드 💊
  // const solution = (babbling) => {
  //   const speak = ["aya", "ye", "woo", "ma"];
  //   let answer = 0;

  //   for (let i = 0; i < babbling.length; i++) {
  //     const test = [];

  //     for (let j = 0; j < speak.length; j++) {
  //       let result = babbling[i].split(speak[j]);

  //       // 단어별로 구분할 때 speak와 같은 말이 있는지부터 확인
  //       if (result != babbling[i]) {
  //         test.push(speak[j]);
  //       }
  //     }

  //     if(test.join("").length == babbling[i].length){
  //       answer++;
  //     }

  //   }

  //   return answer;
  // };

  const babbling = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"];

  function solution(babbling) {
    const babblables = ["aya", "ye", "woo", "ma"];

    return babbling.reduce((possible, babbl, index) => {

      for (let i = 0; i < babblables.length; i++) {
        if (babbl.includes(babblables[i].repeat(2))){
          //  1. yeye = yeye babbl에 속한게 있으니 반환(다음for문으로) /  ayaayaa = ayaaya 
          return possible;
        }
      }

      // babbl을 split를 활용하여 babblables를 한번만 반복하는데
      // 전부 제거되어 공백이 남으면 일치하는 단어모음 이므로 +1해주기 위한 for문
      for (let i = 0; i < babblables.length; i++) {
        // babbl[i]에 split을 사용하여 babblables[i]의 부분을제거하고 남은부분을 배열로 만듦
        // 1. babblables[0] : babbl[0]에서 aya제거한 나머지 "ye" 
        // 2. babblables[1] : 나머지 ye 가 babblables[1]과 같으니 제거
        // 3. babblables[2] : 위에서 일치요소가 제거되서 공백 [" "]
        // 4. babblables[3] : [" "]
        // ⭐️ babbl.split(babblables[i]).join("") 도 가능
        babbl = babbl.split(babblables[i]).join(" ").trim(); // trim : 양끝의 공백 제거
      }

      // 바로 위의 for문에서 babbl값이 비어있으면  if문무시하고
      if (babbl) return possible;

      // 여기서 +1을 해준다
      return (possible += 1);
    }, 0);

  }

  console.log(solution(babbling));

  return <div></div>;
};

export default Solution72;
