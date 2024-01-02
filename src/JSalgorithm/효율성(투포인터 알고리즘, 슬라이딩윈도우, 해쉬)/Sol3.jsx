// 연속 부분수열1
const Sol3 = () => {
  const M = 6;
  const arr = [1, 2, 1, 3, 1, 1, 1, 2];

  const solution = (arr, M) => {
    let answer = 0;
    let tmp = [];

    let lt = 0;
    let sum = 0;

    // 내 방법(앞쪽을 없애는 방식은 똑같다)
    // for(let i=0; i<arr.length; i++){
    //   tmp.push(arr[i])
    //   if(tmp.reduce((a,b) => a+b) > M){
    //     tmp.shift();
    //   }
    //   if(tmp.reduce((a,b) => a+b) == M){
    //     answer++;
    //   }
    // }

    // 강의 방법
    // 1, 2, 1, 3, 1, 1, 1, 2
    // 1+2+1+3 = 7 이 M보다 크니까
    // 1. arr[lt++] : arr[0]인 첫번째 배열정수를 빼고난 후 lt + 1
    // 2. answer ++
    // 3. 2+1+3 = 6으로 M과 같음
    // 4. 6 - arr[lt++] = 4  (1,3)
    // 5. arr[rt] : 4+arr[rt] = 5 이기때문에 while 실행 x  (1,3, +1)
    // 6. arr[rt] : 5+arr[rt] = 6 이기때문에 while 실행 o  (1,3,1, +1)
    // 7. answer++ 후 while문 실행하여 sum -= arr[2++]; (3,1,1)
    // 위와 같은방법으로 for문 종료까지 반복
    for (let rt = 0; rt < arr.length; rt++) {
      sum += arr[rt];
      if (sum === M) answer++;

      // 총 더한값이 M과 같거나 클때
      // 다른 경우의수를 또 찾아야하기 때문에 같아도 맨앞의 값을 뺌 
      while(sum>=M){
        sum -= arr[lt++]; // arr[lt] 를 빼고 lt++ 됨
        if(sum === M) answer++;
      }
    }

    return answer;
  };

  console.log(solution(arr, M));

  return <div></div>;
};

export default Sol3;
