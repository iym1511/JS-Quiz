// 가운데 글자 가져오기
const Solution80 = () => {
  // let s = "abcde";
  let s = "qwer";

  function solution(s) {
    let answer = "";

    if (s.length % 2 !== 0) {
      answer = answer.concat(
        s.slice(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1)
      );
    } else {
      answer = answer.concat(
        s.slice(Math.floor(s.length / 2) - 1, Math.floor(s.length / 2) + 1)
      );
    }

    return answer;
  }

  console.log(solution(s))

  return <div></div>;
};

export default Solution80;
