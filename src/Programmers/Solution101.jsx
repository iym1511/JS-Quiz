// 다음 큰 숫자
const Solution101 = () => {

  const n = 78;

  function solution(n) {
    let answer = 0;
    let num = n+1;
    const oneFilter = n.toString(2).split("").filter((a) => a == 1)
    let twoFilter = num.toString(2).split("").filter((a) => a == 1);
    
    while (oneFilter.length !== twoFilter.length) {
      num++;
      twoFilter = num.toString(2).split("").filter((a) => a === "1");
    }

    answer = num

    return answer;
  }

  console.log(solution(n))


  return <div></div>;
};

export default Solution101;
