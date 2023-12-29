// 자리수의 합
const Sol1 = () => {
  const num = [128, 460, 603, 40, 521, 137, 123];
  const n = 7;
  // 효율적이지 않은 나의 코드
  // const solution = (n, num) => {
  //   let answer = 0;
  //   let obj = {};
  //   let sum = 0;
  //   for(let i=0; i<num.length; i++){
  //     for(let j=0; j<String(num[i]).length; j++){
  //       sum += Number(String(num[i])[j])
  //     }
  //     obj[num[i]] = sum
  //     sum = 0;
  //   }
  //   let max = Math.max(...Object.values(obj))

  //   Object.keys(obj).find(key => {
  //     if(obj[key] === max){
  //       if(answer < Number(key)) answer = Number(key)
  //     }

  //   });

  //   return answer;
  // }

  function solution(n, arr) {
    let answer, max = Number.MIN_SAFE_INTEGER; // 0으로 해도됨
    for (let x of arr) {
      // 각 정수를 문자열화, 배열화 시켜서 a(저장소)에 정수변환한 b를 더한다
      let sum = x.toString().split("").reduce((a, b) => a + Number(b), 0);
      // max값보다 다 더한값이 더 크면!
      if (sum > max) {
        max = sum; // 값저장
        answer = x; // 값 저장
      } else if (sum === max) { // 다 더한값과 저장되어있던 값이 같으면!
        if (x > answer) answer = x;
      }
    }
    return answer;
  }

  console.log(solution(n, num));

  return <div></div>;
};

export default Sol1;
