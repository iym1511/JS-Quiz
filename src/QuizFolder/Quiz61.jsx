// 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.
// 입력 AABBCCC
// 출력 A2B2C3

const Quiz61 = () => {
  const user_s = new String(prompt("문자열을 입력하세요"));
  let result_s = "";
  let store_s = user_s[0];
  let count = 0;
  
  for (let i of user_s) {
    // 1. A가 두번있으니 count + 2
    if (i === store_s) {
      count += 1;
    } else { // 2. B차례가 왔을때 위에서 count된 2 를 여기서 A2 로 result_s에 저장 
      result_s += store_s + String(count);
      store_s = i; // 3. 현재 i가 B니까 store_s를 B로 변환
      count = 1; // 4. count를 1로 초기화 (반복)
    }
  }

  // 5. 마지막 C를 대입해줄 문자열이 없어 else가 작동하지 않기때문에
  // 한번 더 작성
  result_s += store_s + String(count);
  
  console.log(result_s);

  return <></>;
};

export default Quiz61;
