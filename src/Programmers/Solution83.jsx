// [1차]비밀지도 2018 KAKAO BLIND RECRUITMENT
const Solution83 = () => {

  const n = 5;
  const arr1 = [9, 20, 28, 18, 11];
  const arr2 = [30, 1, 21, 17, 28];

  // 로직은 얼추 비슷
  // function solution(n, arr1, arr2) {
  //   let answer = [];
  //   let save = [];

  //   arr1.forEach((a) => {
  //     a.toString(2)
  //       .split("")
  //       .forEach((b) => {
  //         if (b == 1) {
  //           save += "#";
  //         } else {
  //           save += " ";
  //         }
  //       });
  //     // 길이가 4인 배열에 맨 앞에 공백 추가
  //     if (save.length < n) {
  //       console.log(save);
  //       save = [" ".repeat(n - save.length), ...save];
  //     }
  //     answer.push(save);
  //     save = [];
  //   });

  //   // console.log(answer)

  //   arr2.forEach((a, i) => {
  //     // console.log(a.toString(2))
  //     let temp = "";
  //     for (let j = 0; j < n; j++) {
  //       if (answer[i][j] === " ") {
  //         temp += a.toString(2).split("")[j] == 1 ? "#" : " ";
  //       } else {
  //         temp += answer[i][j];
  //       }
  //     }
  //     answer[i] = temp;
  //   });

  //   return answer;
  // }
  
  const solution = (n, arr1, arr2) => {
    const binaryArr1 = arr1.map((num) => {
      const binary = num.toString(2);
    // 5에 못미치는 길이 만큼 앞에서 0을 작성해주고 이후에 concat으로 이진수 붙임
      return "0".repeat(n - binary.length).concat(binary);
    });

    const binaryArr2 = arr2.map((num) => {
      const binary = num.toString(2);
      return "0".repeat(n - binary.length).concat(binary);
    });

    // ⭐️ 처음 계산한 이진수에서 겹치지않는 부분에 "#" 추가
    const answer = binaryArr1.map((binary, binaryIdx) => {
      return binary.split("").map((string, stringIdx) => {
        // ⭐️ binaryArr1 과 binaryArr2의 1의 부분들을 전부 "#"로 0이면 " "으로  
          return (string | binaryArr2[binaryIdx][stringIdx]) === 1 ? "#" : " ";
        }).join("");
    });

    return answer;
  };

  console.log(solution(n, arr1, arr2));

  return <div></div>;
};

export default Solution83;
