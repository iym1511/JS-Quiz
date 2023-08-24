const Quiz69 = () => {
  // 소수 구하기
  let prime = [];
  let isPrime = true;
  // 1과 자기자신을 포함한 소수만 걸러줌
  for (let i = 2; i < 100; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      prime.push(i);
    }
    isPrime = true;
  }
  
  console.log(prime)
  let val = parseInt(prompt("숫자를 입력하세요:"), 10);

  let 골드바흐파티션 = [];
  for (let n of prime) {
    if (prime.includes(val - n) && n <= val - n) {
      골드바흐파티션.push([n, val - n]); // 31 11
      console.log(골드바흐파티션)
    }
  }

  let 차 = 골드바흐파티션.map((e) => e[1] - e[0]);
  console.log(차)
  let 작은값 = 골드바흐파티션[차.indexOf(Math.min.apply(null, 차))];
  let 큰값 = 골드바흐파티션[차.indexOf(Math.max.apply(null, 차))];

  console.log(골드바흐파티션);
  console.log(작은값);
  console.log(큰값);

  return <div></div>;
};

export default Quiz69;
