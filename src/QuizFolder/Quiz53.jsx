// 괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말한다. 그중 괄호의 모양이 바르게 구성된 문자열을 바른 문자열, 그렇지 않은 문자열을 바르지 않은 문자열이라 부르도록 하자. 

// (())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열이다.
// (해당 문제에서는 소괄호만 판별하지만,  중괄호와 대괄호까지 판별해 보세요.)

// 입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.

const Quiz53 = () => {
  // const text = prompt('괄호를 입력하세요').split(' ')

  function mathBrackets(e) {
    let count = 0;

    //괄호 개수가 같지 않으면 false
    for (let i = 0; i < e.length; i++) {
      // 0,1,2,3 배열을 거쳐가면서 () (()) 이 되야 + -를 반복하면서 count 가 0이 유지된다.
      if (e[i] === "(") {
        count++;
      }
      if (e[i] === ")") {
        count--;
      }
    }
    // 유지되지못하면 올바른 괄호가 아니므로 false return
    if (count !== 0) {
      return false;
    }

    let bracket = [];

    // e = 입력된 배열 i = 배열의 index값
    for (let i in e) {
      if (e[i] === "(") {
        bracket.push("(");
      }
      // 입력받은값이 ) 이고 그게 첫번째로 입력됬으면 )을 제거하고 flae return
      if (e[i] === ")") {
        console.log(bracket.length);
        if (bracket.length === 0) {
          return false;
        }
        bracket.pop();
        console.log(bracket.pop());
      }
    }
    return true;
  }

  const n = prompt("입력해주세요.").split("");

  if (mathBrackets(n) === true) {
    console.log("YES");
  } else {
    console.log("NO");
  }

  return <div></div>;
};

export default Quiz53;
