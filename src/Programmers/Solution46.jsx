// 가장 가까운 같은 글자
const Solution46 = () => {
  // 실패한 나의 코드
  // function solution(s) {
  //   let answer = [];
  //   let sum = [];

  //   let save = [];

  //   for(let i = 0; i < s.length; i++){
  //     if(!sum.includes(s[i])){
  //       sum.push(s[i]);
  //       answer.push(-1);
  //     }else{
  //       if(!save.includes(s[i])){
  //         save.push(s[i]);
  //         console.log(i - sum.indexOf(s[i]))
  //       }
  //       // 3 - 1 = 2, 4 - 2 = 2, 5 - 1 = 4
  //       // console.log(i - sum.indexOf(s[i]), sum[sum.indexOf(s[i])])// 3-
  //     }

  //   }

  //   return answer;
  // }
  let asd = {'a':0};
  console.log(asd['a'])

  const s = "banana";

  function solution(s) {
    let answer = [];
    let alpabet = {}; // b,a,n

    s.split("").forEach((a, i) => {
      if (alpabet[a] >= 0) {
        answer.push(i - alpabet[a]); // 7. 3 - 1 = 2 / 9. 4 - 2 = 2 / 11. 5 - 3 = 2
        console.log(i - alpabet[a])
      } else {
        answer.push(-1); // 1. -1 / 3. -1 / 5. -1
      }
      alpabet[a] = i; // 2. b : 0 / 4. a : 1 / 6. n : 2 / 8. {b : 0, a : 3, n : 2} / 10. {b:0,a:3,n:4} / 12. {b:0,a:5,n:4}
      console.log(alpabet)
    });

    return answer;
  }

  console.log(solution(s));

  return <div></div>;
};

export default Solution46;
