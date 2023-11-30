// JadenCase 문자열 만들기

const Solution100 = () => {
  const s = "3people unFollowed me";

  function solution(s) {
    let answer = "";

    for (var i = 0, len = s.length; i < len; ++i) {
      if (i == 0) {
        answer += s[i].toUpperCase();
      } else if (s[i - 1] == " ") {
        answer += s[i].toUpperCase();
      } else {
        answer += s[i].toLowerCase();
      }
    }

    return answer;
  }

  console.log(solution(s));

  return <div></div>;
};

export default Solution100;
