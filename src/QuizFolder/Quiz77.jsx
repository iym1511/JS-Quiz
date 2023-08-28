const Quiz77 = () => {
  const S1 = ["T", "H", "I", "S", "I", "S", "S", "T", "R", "I", "N", "G", "S"];
  const S2 = ["T", "H", "I", "S", "I", "S"];

  //   입력
  // 첫번째 : THISISSTRINGS
  // 두번째 : KIOTHIKESSISKKQQAEW
  // 첫번째와 두번째 문자열을 순회하며 교집합 filter로 걸러내줌
  const sol = (string) => {
    let result = [];
    for (let i = 1; i < string.length + 1; i++) {
      for (let j = 0; j < i; j++) {
        result.push(string.slice(j, j + string.length - i + 1));
      }
    }
    return result
  };

  const inputOne = prompt("첫번째 문자열을 입력해주세요.");
  const inputTwo = prompt("두번째 문자열을 입력해주세요.");
  const arrayOne = sol(inputOne);
  const arrayTwo = sol(inputTwo);

  // 공통 부분 문자열 찾기- 교집합
  let intersection = arrayOne.filter((x) => arrayTwo.includes(x));

  // 문자열 길이로 내림차순 정렬
  intersection.sort((a,b) => {
    return b.length - a.length;
  })

  console.log(intersection[0].length);

  return <div></div>;
};

export default Quiz77;
