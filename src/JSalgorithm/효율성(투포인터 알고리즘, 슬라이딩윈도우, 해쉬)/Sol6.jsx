const Sol6 = () => {

  const arr = [
    "B",
    "A",
    "C",
    "B",
    "A",
    "C",
    "C",
    "A",
    "C",
    "C",
    "B",
    "D",
    "E",
    "D",
    "E",
  ];

  /** 실행함수 */
  const solution = (arr) => {
    let answer;
    const map = new Map();

    // map.has() 값이 존재하면 true 아니면 false
    for (let i = 0; i < arr.length; i++) {
      if (!map.has(arr[i])) {
        map.set(arr[i], 1);
      } else {
        // arr[i]이랑 같은 값을 가져옴 거기에+1 해서 갯수 증가
        map.set(arr[i], map.get(arr[i]) + 1);
      }
    }

    let maxValue = 0;
    // value 들을 계속 비교해나감
    // 큰값이 answer에 저장됨 
    for (let [key, value] of map) {
      if (value > maxValue) {
        answer = key;
        maxValue = value;
      }
    }

    return answer;
  };

  console.log(solution(arr));

  return <div></div>;
};

export default Sol6;
