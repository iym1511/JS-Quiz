// 총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요.

const Quiz59 = () => {

  // ez) ㅂㅈㄷㅁㄴㅇ 입력
  const text = prompt("문자를 입력하시오");

  // 28
  const n = 25 + parseInt((text.length/2), 10);

  //왼쪽부터 text 개수를 포함해서 28칸 채우기 (22칸을 == 로)
  const a = text.padStart(n, "=");
  

  //오른쪽까지 채워서 출력 (50 - 28 = 22칸채움)
  // result = 22칸 ㅂㅈㄷㅁㄴㅇ 22칸
  console.log(a.padEnd(50, "="));

  return <div></div>;
};

export default Quiz59;
