// LRU(카카오 캐시 변형 : 삽입정렬응용)
const Sol5 = () => {
  const arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
//   캐시 메모리 상태 변화
// 10000 21000 32100 23100 62310 26310 32610 53261 75326

  // 정석
  const solution = (size, arr) => {
    let answer = Array.from({ length: size }, () => 0);

    arr.forEach((x) => {
      let pos = -1;
      // answer배열에 현재 arr와 같은 정수가 있나 확인 있으면 pos=i
      for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
      // pos가 없다면
      if (pos === -1) {
        for (let i = size - 1; i >= 1; i--) {
          answer[i] = answer[i - 1]; // 앞에있는 정수 뒤로 당김
        }
      } else {
        // pos의 정수에 따라서 pos위치부터 -1씩내려가면서 위치변경
        for (let i = pos; i >= 1; i--) {
          answer[i] = answer[i - 1];
        }
      }

      // 앞자리를 한칸씩 땡기니까 23100에서 02310이 되니까 비는 첫번째자리를 채움
      // ex) 62310
      answer[0] = x;
    });

    return answer;
  };

  // 내장함수 사용
  const solution2 = (size, arr) => {
    let answer = [];

    arr.forEach((x) => {
      let pos = -1;
      // answer배열에 현재 arr와 같은 정수가 있나 확인 있으면 pos=i
      for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
      // pos가 없다면
      if (pos === -1) {
        answer.unshift(x);
        if (answer.length > size) answer.pop();
      } else {
        answer.splice(pos, 1); // pos자리 index값 배열에서 제거
        answer.unshift(x);
      }
    });

    return answer;
  };

  console.log(solution(5, arr));
  console.log(solution2(5, arr));

  return <div></div>;
};

export default Sol5;
