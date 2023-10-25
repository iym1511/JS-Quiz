// 핸드폰 번호 가리기
const Solution59 = () => {
  const phone_number = "01033334444";

  function solution(phone_number) {
    let answer = "";
    for (let i = 0; i < phone_number.length; i++) {
      if (phone_number.length-1 - i < 4) {
        answer += phone_number[i]
      } else {
        answer += "*";
      }
    }

    return answer;
  }

  console.log(solution(phone_number));

  return <div></div>;
};

export default Solution59;
