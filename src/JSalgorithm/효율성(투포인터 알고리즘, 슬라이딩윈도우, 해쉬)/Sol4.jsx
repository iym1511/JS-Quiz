// 연속부분수열2
const Sol4 = () => {
  const m = 5;
  const arr = [1, 3, 1, 2, 3];

  const solution = (arr, m) => {
    let answer = 0;
    let lt = 0;
    let sum = 0;

    for(let rt=0; rt<arr.length; rt++){
      sum += arr[rt];
      // m이하가 될때까지 sum에서 앞자리수 들을 - 해나간다.
      // sum에서 앞자리수를 빼고 나서야 m보다 이하가 되어서 answer에 + 할 수 있다
      while(sum>m){
        sum -= arr[lt++]
      }
      // sum이 m이하가 되어야만 answer에 플러스된다.
      answer += (rt-lt+1);
    }

    // 1. sum = 1 0-0+1=(1)
    // 2. sum = 4 1-0+1=(2)
    // 3. sum = 5 2-0+1=(3)
    // 4. sum = 7 3-1+1=3 여기서 sum = 6 / sum = 6 3-2+1=(2) 여기서 sum = 3 lt++로 3됨
    // 5. sum = 3 4-2+1=3 sum = 6 / 4-3+1=(2) 이 sum = 5가 된다
    // while(lt < arr.length && rt < arr.length){
    //   if(sum > m){
    //     sum -= arr[lt++]; 
    //   }else{
    //     answer += rt - lt + 1 // 1. 0-0+1=(1) / 3. 1-0+1=(2) / 5. 2-0+1=(3) / 7. 3-0+1=4
    //     sum += arr[rt++]; // 2. sum=1 그후 rt=1 / 4. sum=4 그후 rt=2 / 6. sum=5 그후 rt=3 / 8. 

    //   }
    // }

    return answer;
  };

  console.log(solution(arr, m));

  return <div></div>;
};

export default Sol4;
