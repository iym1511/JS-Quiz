// 졸업선물(완전탐색)
const Sol4 = () => {
  
  const arr = [[6,6], [2,2], [4,3], [4,5], [10, 3]];
  const max = 28

  const solution = (arr,max) => {
    let answer = 0;
    let n = arr.length;
    let cnt = 1;
    // 더한값의 오름차순으로 정렬
    arr.sort((a,b) => (a[0]+a[1]) - (b[0]+b[1]));

    for(let i=0; i<n; i++){
      // 하나의 상품 50% 할인화
      let money = max-(arr[i][0]/2 + arr[i][1]);
      let cnt = 1;
      for(let j=0; j<n; j++){
        // 효율을위해 <= money가 작동하지않을때 break;
        if(j!==i && (arr[j][0]+arr[j][1] > money)) break;
        // i는 할인받은곳 위치기 때문에 할인을 제외하고
        // 두 물건의 합이 할인된 가격을 빼고 남은 money와 같거나 작으면 
        if(j!==i && (arr[j][0]+arr[j][1] <= money)){
          money -= arr[j][0]+arr[j][1]
          cnt++;
        }
        answer = Math.max(answer, cnt);

      }

    }
    
    return answer;
  }

  console.log(solution(arr,max));

  return ( 
    <div>

    </div>
  );
}
 
export default Sol4;