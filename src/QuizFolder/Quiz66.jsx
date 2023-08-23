const Quiz66 = () => {
  const top = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
  const rule = "ABD";

  
  function solution(top, rule) {
    let answer = [];
    for (let values of top) {
      // blockCheck 함수에서 return 받은 가능,불가능 문자열 배열에추가
      answer.push(blockCheck(values, rule));
    }
    return answer;
  }

  // solution 에서 top값과 rule 인자 받음
  function blockCheck(values, rule) {
    // 기본값 0
    let ruleTest = rule.indexOf(rule[0]);

    for (let i of values) {
      // rule에 "BCAD"중 하나가 포함되있으면
      if (rule.includes(i)) {

        // A문자열을 찾을때 rule의 0번째index이기 때문에 1 > 0 이되어 불가능  
        if (ruleTest > rule.indexOf(i)) {
          return "불가능";
        }
        ruleTest = rule.indexOf(i);
      }
    }
    return "가능";
  }

  console.log(solution(top, rule));

  return <div></div>;
};

export default Quiz66;
