// 다른 사람의 풀이
const Solution43 = () => {
  const a = 2;
  const b = 1;
  let n = 20;

  // function solution(a, b, n) {

  //   let glass = 0;
  //   let answer = 0;
  //   let sum = 0;

  //   let result = 0;

  //   for(let i = 1; i <= n; i++){
  //     answer = Math.floor(n / a); //1.  20 / 3 = 6.66666 // 5. 8 / 3 == 2.... // 9. 4 / 3 = 1...
  //     result += answer
  //     console.log('1. ',answer);

  //     glass = n - (answer * a) //2. glass = 2 // 6. 8 - (2 * 3) = 8 - 6 = 2 // 10. 4 - 3 = 1
  //     console.log('2. ',glass);

  //     sum = Math.floor(answer) + glass //3.  sum = 6 // 7. sum = 4 // 11. sum = 1 + 1
  //     console.log('3. ',sum);

  //     n = Math.floor(sum)  // 4. n = 8 // 8. n = 4 // 12. n = 2
  //     console.log('4. ',n);

  //   }
  //   return result

  // }


  // 풀이 코드
  function solution(a, b, n) {
      let answer = 0;
  
      // n이 a보다 크거나 같을때까지 반복
      // 4. 10 >= 2
      // 8. 5 >= 2
      // 11. 3 >= 2 
      // 12. 2 >= 2 / 이후 1로 마무리됨
      while(n >= a) {
          const check = Math.floor(n / a); // 1. 10  / 5. 5  / 8. 2   / 12. 1
          answer += check * b // 2. answer += 10 * 1   / 6. 5  / 9. 2   / 13. 1
          n += check * b - check * a // 3. n += 10 - 20  / 7. 10 += 5 - 10  / 10. 5 += 2 - 4 / 14. 3 += 1 - 2
      }
  
      return answer;
  }

  console.log(solution(a, b, n))

  return <div></div>;
};

export default Solution43;
