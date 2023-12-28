// 뒤집은 소수
const Sol2 = () => {
  const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];

  // 내가짠 코드 (크게 다르지않음)
  // const solution = (arr) => {
  //   let answer = [];
  //   for (let x of arr) {
  //     let res = Number(x.toString().split("").reverse().join(""));
  //     let sum = 0;

  //     for (let i = 2; i < res / 2; i++) {
  //       if (res % i === 0) {
  //         sum++;
  //       }
  //     }

  //     if (sum == 0 && res != 1) {
  //       answer.push(res);
  //     }
  //   }

  //   return answer;
  // };

  // 소수구하는 함수를 분리해서 사용한 코드

  const isPrime = (res) => {
    if(res === 1) return false
    // 정수의 절반까지만 나누어도 약수는 절반 이후로는 같기때문에 절반까지만 반복
    for (let i = 2; i < parseInt(Math.sqrt(res)); i++) {
      if (res % i === 0) {
        return false
      }
    }
    return true
  };

  const solution = (arr) => {
    let answer = [];
    for (let x of arr) {
      let res = Number(x.toString().split("").reverse().join(""));
      if (isPrime(res)) answer.push(res);
    }
    return answer
  };

  console.log(solution(arr));

  return <div></div>;
};

export default Sol2;
