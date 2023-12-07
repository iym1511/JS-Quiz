// 괄호 회전하기

const Solution110 = () => {
  const s = "[](){}";
  // const s ="}]()[{";
  
  // 92점짜리
  // const solution = (s) => {
  //   let answer = 0;
  //   const open = ["[", "(", "{"];
  //   const close = ["]", ")", "}"];
  //   let num = 1;
  //   let ary = [];

    // while (num !== s.length) {
    //   const stack = [];

    //   for (let i = 0; i < s.length; i++) {
    //     if (open.includes(s[i])) {
    //       stack.push(s[i]);
    //     } else if (close.includes(s[i])) {
    //       
    //       const correspondingOpenBracket = open[close.indexOf(s[i])];
    //       if (stack.length === 0 || stack.pop() !== correspondingOpenBracket) {
    //         stack.pop();
    //       }
    //     }
    //   }
      
    //   if (stack.length === 0) {
    //     answer += 1;
    //   }

    //   const sArray = s.split(""); // 문자열을 배열로 변환
    //   const firstChar = sArray[0]; // 첫 번째 문자 저장

    //   for (let i = 0; i < sArray.length - 1; i++) {
    //     sArray[i] = sArray[i + 1]; // 다음 위치의 문자로 변경
    //   }

    //   sArray[sArray.length - 1] = firstChar; // 마지막 위치에 첫 번째 문자 할당
    //   s = sArray.join("");
    //   num++;

    // }

  //   return answer;
  // };

  // 내가 생각했었던 괄호를 하나하나 if문으로 확인해서 올바른 괄호찾기를 적용시킨 코드
  function solution(s) {
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
      const arr = [];
      // 첫번째 배열이면 s 아니면 / ](){} + [ (index값1부터 자름 + index 0이상 1미만 자름)
      const temp = i === 0 ? s : s.slice(i) + s.slice(0, i);

      for (let j = 0; j < temp.length; j++) {
        if (arr[arr.length - 1] === '(' && temp[j] === ')') arr.pop();
        else if (arr[arr.length - 1] === '[' && temp[j] === ']') arr.pop();
        else if (arr[arr.length - 1] === '{' && temp[j] === '}') arr.pop();
        else arr.push(temp[j]);
      }
      if (arr.length === 0) answer++;
    }
    return answer;
  }

  console.log(solution(s));

  return <div></div>;
};

export default Solution110;
