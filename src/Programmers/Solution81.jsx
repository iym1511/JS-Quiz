// 문자열 내림차순으로 배치하기

const Solution81 = () => {
  const s = "Zbcdefg";

  function solution(s) {
    let answer = "";

    s.split("").sort((a,b) => a>b ? 1: -1).join("")

    return answer;
  }

  console.log(solution(s));

  return <div></div>;
};

export default Solution81;
