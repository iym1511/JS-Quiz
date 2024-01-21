const SolSelf = () => {
  const arr = [13, 5, 11, 7, 23, 15];

  // 선택정렬
  const solution = (arr) => {
    let answer = [];

    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[min] > arr[j]) {
          min = j;
        }
      }
      // 앞뒷자리 바꿈
      [arr[i], arr[min]] = [arr[min], arr[i]];
      console.log(`${i + 1}번째${arr}`);
    }
    return answer;
  };

  // console.log(solution(arr))

  const solution2 = (arr) => {
    let answer;
    for (let i = 0; i < arr.length - 1; i++) {
      console.log(arr);
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
        console.log(arr);
      }
    }
    return answer;
  };
  // console.log(solution2(arr));

  const arr3 = [1,2,3,-3,-2,5,6,-6];

  const solution3 = (arr) => {
    let answer;
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > 0 && arr[j + 1] < 0) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
      console.log(arr3);
    }
    return answer;
  };
  console.log(solution3(arr3));

  return <div></div>;
};

export default SolSelf;
