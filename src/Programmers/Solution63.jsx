const Solution63 = () => {

  const n = [1,2,7,6,4];

  // 소수인지 판별하는 함수
  function isPrime(x) {
    let result = 0;
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0){
        return false;
      }
    }
    // 1과 본인만 나눠지는 소수를 출력
    result += x; 
    return result;
  }

  function solution(n) {
    // 소수의 개수를 저장할 변수
    // let result = [];
    let answer = 0;

    for(let i = 0; i<n.length; i++){
      for(let j = i+1; j<n.length; j++){
        for(let k = j+1; k<n.length; k++){
          if(isPrime(n[i] + n[j] + n[k]) != false){
            answer++; 
          }
        }
      }
    }


    // 💡 무슨 소수가 있는지 출력할때 쓰임
    // 1은 소수가 아니므로 2부터 n까지 소수를 판별해줌
    // for (let i = 0; i < n.length; i++) {
    //   // 소수이면 소수의 개수에 1 추가
    //   if(isPrime(n[i]) != false){
    //     result.push(isPrime(n[i]))
    //   }
    // }

    return answer;
  }

  console.log(solution(n))

  return <div></div>;
};

export default Solution63;
