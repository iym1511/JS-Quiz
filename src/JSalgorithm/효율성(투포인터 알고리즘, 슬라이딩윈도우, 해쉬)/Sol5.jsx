// 최대 매출
const Sol5 = () => {
  const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
  const k = 3;

  // 나의 방식(맞는코드)
  // const solution = (arr, k) => {
  //   let answer = 0;
  //   let lt = 0;
  //   let cnt = 0;
  //   let sum = 0;
  //   for (let rt = 0; rt < arr.length; rt++) {
  //     cnt++; // 1. 1 // 3. 2 // 5. 3
  //     sum += arr[rt]; // 2. sum = 12 // 4. sum = 27 // 6. 38

  //     if (cnt == k) {
  //       cnt--; // 7. 2
  //       // if문과 Math.max는 성능차이x
  //       answer = Math.max(sum, answer);
  //       // if(sum > answer){
  //       //   answer = sum // 8. answer = 38
  //       // }
  //       sum -= arr[lt++]; // 9. sum=27 이후 lt=1
  //     }
  //   }
  //   return answer;
  // };

  // 강의 2중for문 방식
  const solution = (arr,k) => {
    let answer, sum=0;
    for(let i=0; i<k; i++){
      sum+=arr[i]
    }
    // 처음 3개의 배열을 더하고 시작
    answer=sum

    // 내 코드와 같은로직이다
    // sum = 38 + 20 - 12  sum=56
    // 즉 첫번째 정수를 빼고 현재 정수를 더한것이 한줄로 된것뿐 헷갈리지말자
    for(let i=k; i<arr.length; i++){
      sum+=arr[i]-arr[i-k]
      console.log(sum)
      answer = Math.max(answer,sum)
    }
  }

  console.log(solution(arr, k));

  return <div></div>;
};

export default Sol5;
