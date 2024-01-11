// 선택 정렬
const Sol1 = () => {
  const s = [13, 5, 11, 7, 23, 15];

  const solution = (s) => {
    let answer;
    // i : 오름차순 해 나갈 값
    // j : 오름차순에 변경할 값
    for (let i = 0; i < s.length; i++) {
      let min = i;
      for (let j = i + 1; j < s.length; j++) {
        if (s[min] > s[j]) {
          min = j;
        }
      }

      [s[i], s[min]] = [s[min], s[i]];

      // 아래 방법대로 해도 됨
      // min이 변경되면 오름차순 할 정수가 있다는 것
      // (변경x면 오름차순 할 정수가 없었다는건)
      // if (min !== i) {
      //   let swap = s[min]; // s[min] : 바꿀 정수저장
      //   s[min] = s[i]; // 한바퀴 후 5,13,7,23,15 (7 = 13)
      //   s[i] = swap;  //  5,13,13,23,15 저장된값이용 (13 = 7) 5,7,13,23,15
      // }
      console.log(`${i + 1}번째`, s);
    }
    return answer;
  };

  console.log(solution(s));

  return <div></div>;
};

export default Sol1;
