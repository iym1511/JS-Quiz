const Solution50 = () => {
  const cards1 =["i", "drink", "water"];
  const cards2 = ["want", "to"];
  const goal = ["i", "want", "to", "drink", "water"];

  function solution(cards1, cards2, goal) {
    let answer = '';

    // goal을 순환하면서 cards들의 배열을 하나씩 빼고 첫번째 자리들을 비교한다
    for(let i = 0; i < goal.length; i++){
      // 1. i와 i 같음 // 4. drink 와 drink같음 / 5. water와 water같음 
        if(cards1[0] == goal[i]) {
            cards1.shift();
        } else if(cards2[0] == goal[i]) { // 2. want와 want 같음 /3. to와 to 같음
            cards2.shift();
        } else {
            return "No";
        }
    }

    return "Yes";
  }

  console.log(solution(cards1, cards2, goal));

  return <div></div>;
};

export default Solution50;
