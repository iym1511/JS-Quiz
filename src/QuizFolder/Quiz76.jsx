const Quiz76 = () => {

  let 사각형 = 5;
  let 탐색가능지역 = 3;
  let 지뢰밭 = [
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
  ];

  let iadd = 0;
  let jadd = 0;
  let value = 0;

  let valueArray = [];
  for (let iadd = 0; iadd <= 사각형 - 탐색가능지역; iadd++) { // 2 / 1. 3번순회
    // for문 순회순서 : 아래 과정들을 총 3번씩 반복해서 console.log !!!!! 기준으로 3개가나와 총 9개의 문단이 나옴
    for (let jadd = 0; jadd <= 사각형 - 탐색가능지역; jadd++) { // 2 / 1. 3번순회
      // for문 순회순서 : 0일때 아래 0 3번 1일때 아래 1 3번 2일때 아래 2 3번 (이후 1,2,3 / 2,3,4 동일 반복)
      for (let i = iadd; i <= 탐색가능지역 - 1 + iadd; i++) { // 2 / 1. 3번순회
        // for문 순회순서 : 0일떄 0,1,2 3번 1일때 0,1,2 3번 2일때 0,1,2 3번
        for (let j = jadd; j <= 탐색가능지역 - 1 + jadd; j++) { // 2 / 1. 0,1,2 순회 
          // for문 순회순서 : 0,1,2 3번 1,2,3 3번 2,3,4 3번
          // console.log(i, j);
          value += 지뢰밭[i][j];
        }
      }
      valueArray.push(value);
      console.log("---------");
      value = 0;
    }
    console.log("!!!!!!!");
  }

  console.log(valueArray);
  console.log(Math.max.apply(null, valueArray));
  // Math.max(...valueArray) 스프레드 연산자 사용가능

  return <div></div>;
};

export default Quiz76;
