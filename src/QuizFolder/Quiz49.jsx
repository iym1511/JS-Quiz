// # 문제49 : 최댓값 구하기

// 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.

const Quiz49 = () => {

  // 내 코드
  let arrays = []

  for(let i = 0; i < 10; i++){
    const num = prompt("순서가 없는 10개의 숫자 입력")
    arrays.push(Number(num))
  }
  console.log(Math.max(...arrays));


  // 정답
  let numbers = prompt('10개의 숫자를 입력하세요').split(' ').map((n) => {
    console.log(parseInt(n, 10))
    return parseInt(n, 10);
  });
  numbers.sort((a, b) => {
    return b-a;
  });
  
  console.log(numbers[0]);

  return (  
    <div>

    </div>
  );
}

export default Quiz49;