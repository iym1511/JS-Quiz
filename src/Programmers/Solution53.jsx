const Solution53 = () => {
  const d = [1, 3, 2, 5, 4];
  const budget = 9;

  function solution(d, budget) {

    // 💡 map이나 forEach로 했을때는 true,false값이 반환되어서 값이 나오진 않는다.
    
    let copy = d.sort((a, b) => a - b).filter((a) => {
      // 9 랑 배열 순서대로 뺏을때 0보다 크거나 같은것일때 실행
      if(budget - a >= 0){
        budget -= a // 9랑 배열을 계속 빼줌 
        console.log(budget)
        return true // 해당 원소가 예산 내에서 선택 가능한 경우
      }
      return false // 해당 원소가 예산 내에서 선택 불가능한 경우
    })

    return copy.length;
  }

  console.log(solution(d, budget));

  return <div></div>;
};

export default Solution53;
