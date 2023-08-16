// # 문제50 : 버블정렬 구현하기

// 버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.

const Quiz50 = () => {

  // 2중 for문은 내부 for문이 전체를 반복하면 외부 for문이 한번 반복한다.
  function bubble(arr) {
    let result = arr.slice(); // 원본 배열 복사
    for (let i = 0; i < result.length - 1; i++) {
      for (let j = 0; j < result.length - i; j++) {
        // 0과1, 1과2 자릿수를 비교하며 
        console.log(j,i)
        if (result[j] > result[j + 1]) {
          let temp = result[j]; // 현제 자릿수 확인
          result[j] = result[j+1]; // 자리 교체 0,1 > 1,0
          result[j+1] = temp; // 교체한 값을 다시 temp 변수에 저장
        }
      }
    }
    return result;
  }
  
  // for문을 자세히 살펴봤을때
  // i 가 0일땐 0,1,2,3,4 총 5번 의 확인 후 교체
  // i 가 1일땐 0,1,2,3 총 4번 의 확인 후 교채 이런식으로 하나씩 크기비교후 정렬

  // 3 9 8 2 5
  // 3 8 9 2 5
  // 3 8 2 9 5
  // 3 8 2 9 5
  // 3 8 2 5 9
  
  // 3 8 2 5 9
  // 3 2 8 5 9
  // 3 2 5 8 9
  // 3 2 5 8 9

  // 2 3 5 8 9 완성이 되어 아래부터는 똑같다.


  const items = prompt('입력해주세요.').split(' ').map((n) => {
    return parseInt(n, 10);
  });
  console.log(items)
  console.log(bubble(items));

  return (  
    <div>

    </div>
  );
}
 
export default Quiz50;