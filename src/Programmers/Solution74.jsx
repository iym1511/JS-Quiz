const Solution74 = () => {
  const s = "aukks";
  const skip = "wbqd";
  const index = 5;

  // const solution = (s, skip, index) => {
  //   let idx = index;
  //   let answer = '';
  //   const Ary = ["a","b","c","d","e","f","g","h","r","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  //   let filterAry = Ary.filter((a) => !skip.includes(a))

  //   for(let j = 0; j<s.length; j++){
  //     if (skip.includes(s[j])) {
  //       continue; // skip 배열에 있는 문자는 건너뛰기
  //     }

  //     let found = filterAry.indexOf(s[j]);
  //     if (found !== -1) {
  //       let newIndex = (found + idx) % filterAry.length;
  //       answer += filterAry[newIndex];
  //     } else {
  //       answer += s[j]; // filterAry에 없는 문자는 그대로 사용
  //     }
  //   }

  //   return answer;
  // }

  // 기본 알파벳 배열 생성
  // 배열에서 skip 문자열들은 splice로 제거
  // s를 순회하면서 index만큼 증가한 알파벳 값 찾아서 join

  function solution(s, skip, index) {
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

        /*
    알파벳 만드는 법
    const alphabet = []
    for (let i = 97; i <= 122; i++) {
      alphabet.push(String.fromCharCode(i));
    }
    */

    // splice 를써서 skip 알파벳과 같은부분을 잘라냄
    skip.split("").forEach((v) => {
      alphabet.splice(alphabet.indexOf(v), 1);
    });

    const answer = s 
      .split("")
      .map((v) => {
        // 알파벳 마지막인 z 를 넘어간 index를 구해야 하기때문에 % 사용
        return alphabet[(alphabet.indexOf(v) + index) % alphabet.length];
      })
      .join("");

    return answer;
  }

  console.log(solution(s, skip, index));

  return <div></div>;
};

export default Solution74;
