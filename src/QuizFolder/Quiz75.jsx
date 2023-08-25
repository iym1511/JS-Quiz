const Quiz75 = () => {
  // 내코드
  // const test = prompt('숫자를 입력하세요.');

  // const testFc = () => {
  //   const defaultArrays = ['3','6','9'];
  //   let arrays = [];

  //   for (let i = 1; i <= test; i++) {
  //     const digits = i.toString().split(''); // 숫자를 문자열로 변환하고 자릿수별로 나눔
  //     // every() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트합니다. Boolean 값을 반환합니다.
  //     const isOnly369 = digits.every(digit => defaultArrays.includes(digit)); // 모든 자릿수가 3, 6, 9 중 하나인지 확인
  //     if (isOnly369) {
  //       arrays.push(i);
  //       console.log(arrays.length)
  //     }
  //   }

  // }

  // console.log(testFc())

  // 답안
  function sol(n) {
    let answer = 0;
    let count = 1;
    const d = { 3: 1, 6: 2, 9: 3 };

    while (n.length !== 0) {
      // 1. ['9','3'] 에서 [3]을 반환 d[3]: 1 * count = 1
      // 2. [9]반환 d[9]: 3 * count = 9 / 원래있던 1 과 + 9 = 10 
      answer += d[parseInt(n.pop(), 10)] * count;
      // 3. count * 3 = 3
      count *= 3;
    }
    // 4. 10 
    return answer;
  }

  // ['9','3']
  const user_input = new String(prompt("입력해주세요")).split("");
  console.log(sol(user_input));

  return <div></div>;
};

export default Quiz75;
