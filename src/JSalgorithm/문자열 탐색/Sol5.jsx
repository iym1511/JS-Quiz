// 문자열 압축
// 알파벳 대문자로 이루어진 문자열을 입력받아
// 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에
// 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오.
//  단 반복횟수가 1인 경우 생략합니다.
// ▣ 입력설명
// 첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
// ▣ 출력설명
// 첫 줄에 압축된 문자열을 출력한다.
// ▣ 입력예제 1 KKHSSSSSSSE
// ▣ 출력예제 1 K2HS7E

const Sol5 = () => {

  const str = "KKHSSSSSSSE";

  function solution(s) {
    let answer = "";
    let cnt = 1;

    // 코드가 다음문자열을 확인하는방식이라 마지막E와 비교할 빈칸 생성
    s = s + " ";
    
    for (let i = 0; i < s.length - 1; i++) {
      if (s[i] === s[i + 1]) cnt++; // 현재문자열과 다음문자열이 같으면 cnt++1
      else { 
        answer += s[i];
        if (cnt > 1) { // 1이상일때 문자열개수 추가
          answer += String(cnt);
        }
        cnt = 1; // 원래값으로 초기화
      }

    }
    return answer;
  }

  console.log(solution(str));

  return <div></div>;
};

export default Sol5;
