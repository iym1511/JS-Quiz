// 이분검색
const Sol10 = () => {
  const arr = [23, 87, 65, 12, 57, 32, 99, 81];

  function solution(target, dataArray) {
    let answer;
    dataArray.sort((a,b) => a-b);
    // [12, 23, 32, 57, 65, 81, 87, 99]
    // 정렬 후 반으로 나누어서 target보다 큰쪽은 다 날리고 시작
    let low = 0;
    let high = dataArray.length - 1;
    while(low <= high){
      let mid = Math.floor((high + low) / 2); // 1. mid=3 // 3. mid=1
      // 5. 32 === 32 answer = 1+1 (2) !완!
      if(dataArray[mid] === target){
        answer = mid+1;
        break;
      }
      // 2. 57 > 32 high = 3-1 (high=2);
      else if(dataArray[mid] > target) high=mid-1;
      else low= mid+1; // 4. 23 > 32 low = 1+1 (low=2)
    }
  
    return answer;
  }

  console.log(solution(32, arr));

  return <div></div>;
};

export default Sol10;
