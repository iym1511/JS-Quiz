const Solution113 = () => {
  const s = "1 2 3 4";

  function solution(s) {
    let answer = "";

    answer += Math.min(...s.split(" "))
    if(answer != ""){
      answer += ' ' 
      answer += Math.max(...s.split(" "))
    }

    return answer;
  }

  console.log(solution(s));

  return <div></div>;
};

export default Solution113;
