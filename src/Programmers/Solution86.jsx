// 연속된 부분 수열의 합
const Solution86 = () => {

  // const solution = (sequence, k) => {
  //   let answer = [];

  //   let list = [];
  //   let sum = 0;

  //   for (let i = 0; i < sequence.length; i++) {
  //     for (let j = i; j < sequence.length; j++) {
  //       if (sum < k) {
  //         sum += sequence[j];
  //         list.push(sequence[j]);
  //       }
  //       if (sum == k) {
  //         answer.push(list);
  //       }
  //       if (sum > k) {
  //         break;
  //       }
  //     }
  //     list = [];
  //     sum = 0;
  //   }

  //   answer = new Set(answer);

  //   if (answer.size == 1) {
  //     answer.forEach(([a, b]) => {
  //       a -= 1;
  //       b -= 1;
  //       return (answer = [a, b]);
  //     });
  //   }

  //   if (answer.size > 1 && Array.from(answer)[1].length != Array.from(answer)[0].length)  {
  //     let val = [];
  //     Array.from(answer).forEach((a) => {
  //       val.push(a.join(""));
  //     });

  //     let result = val.join("").length - 1;
  //     return [result, result];
  //   }

  //   if(answer.size > 1 && Array.from(answer)[1].length == Array.from(answer)[0].length){
  //     let result2 = []
  //     Array.from(answer).forEach((a,i) => {
  //       if(i === 0){
  //         a.forEach((b,i) => {
  //           result2.push(i)
  //         })
  //       }
  //     })
  //     console.log(result2)
  //     return [result2[0],result2[result2.length-1]]
  //   }

  //   return answer;
  // };

  const sequence = [1, 2, 3, 4, 5];
  const k = 7;

  // const sequence = [1, 1, 1, 2, 3, 4, 5];
  // const k = 5;

  // const sequence = [2, 2, 2, 2, 2];
  // const k = 6;


  function solution(sequence, k) {
    var answer = [0, sequence.length - 1];
    let left = 0;
    let right = 0;

    // 1. sum = 1 / 5. 3 / 8. 6 / 12. 10 / 16. 9 / 20. 7 / 26. 4 / 30. 9 / 34. 6
    let sum = sequence[left];

    while (right < sequence.length) {
      if (sum > k) { // 13. 10>7 / 17. 9>7 / 31. 9>7
        sum -= sequence[left]; // 14. 10 -= 1 / 18. 9 -= 2 / 32. 9 -=3
        left++; // 15. 1 / 19. 2 / 33. 3
      } else if (sum < k) {  //2. 1 < 7 / 5. 3<7 / 9. 6<7 / 27. 4<7 / 35. 6<7
        right++;// 3. 1 / 6. 2 / 10. 3 / 28. 4 / 36. 5
        sum += sequence[right]; // 4. 1 += 2 / 7. 3 += 3 / 11. 6 += 4 / 29. 4+=5 / 37. 6 += undefind(중단)
      } else { // 7이여서 k과 같으니 else실행
        let distance = answer[1] - answer[0]; // 21. 4-0=4
        let currentDistance = right - left; // 22. 3-2=1
        if (distance > currentDistance) { // 23. 4 > 1
          answer = [left, right]; // 24. answer = [2,3]
        }
        sum -= sequence[left]; // 25. 7 -= 3
        left++; // 27. 3
      }
    }

    return answer;
  }

  console.log(solution(sequence, k));

  return <div></div>;
};

export default Solution86;
