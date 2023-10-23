// 소수찾기
const Solution57 = () => {

  const n = 10;

  function solution(n) {
    let numbers = []
    let answer = []
    // 숫자의 제곱근을 반환
    const root = Math.sqrt(n);

    // 배열 초기설정
    for (let a = 0; a <= n; a++) {
      numbers.push(true);
    }

    // 0과 1은 소수가 아니므로, 해당 인덱스 값을 false로 변경합니다.
    numbers[0] = false
    numbers[1] = false

    // 합성수는 false로 교체
    for (let i = 2; i < root; i++) {
        if (numbers[i]) {
            // 합성수는 기준수의 배수로 찾는다.
            // 시작을 기준수의 제곱으로 한다. (본인 수 제외, 제곱 값 이전의 수는 기준수보다 작은 소수가 시행될 때 이미 걸러짐)
            // 판단해야 할 수는 기준수의 배수이므로, 기준 수를 더해가며 건너 뛴다.

            // i가 2일때 4번 반복, i가3일때 1번반복 총 5번반복
            for (let j = i * i; j <= n; j += i) {
                numbers[j] = false;
            }
        }
    }

    answer = numbers.filter(num => num === true)
    return answer
}

  console.log(solution(n));

  return (  
    <div>

    </div>
  );
}

export default Solution57;