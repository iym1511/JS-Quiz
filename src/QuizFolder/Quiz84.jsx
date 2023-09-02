const Quiz84 = () => {
  const solution = (n) => {
    let answer = "1";

    if (n === 1) {
      return 1;
    }

    for (let i = 1; i < n; i++) {
      console.log(answer);
      // 3. answer = '11' // 6. '12' // 11. '1121'
      answer = rule(answer);
    }
    return answer;
  };

  const rule = (answer) => {
    // 8자리 수 까지 제한
    let answerMax = 9;
    let result = "";

    for (let i = 1; i < answerMax; i++) {
      let re = new RegExp(i, "g"); // 정규 표현식 객체를 생성 (/1/g, /2/g, /3/g ... 생성)
      // 1. '1'.match(/1/g) : ['1'] (나머지는 1이아니라 빈배열) // 4. '11'.match(/1/g) : ['1','1'] // 7. '12'.match(/1/g) : ['1'] // 9. '12'.match(/2/g) : ['2']
      let count = (answer.match(re) || []).length; // match() 메서드는 문자열이 정규식과 매치되는 부분을 검색합니다.
      if (count >= 1) {
        console.log(result, String(i), String(count));
        // 2. ''+'1'+'1' // 5. ''+'1'+'2' // 8. ''+'1'+'1' // 10. '11'+'2'+'1'
        result = result + String(i) + String(count);
      }
    }
    return result;
  };

  const user_input = 6;
  console.log(solution(user_input));

  return <div></div>;
};

export default Quiz84;
