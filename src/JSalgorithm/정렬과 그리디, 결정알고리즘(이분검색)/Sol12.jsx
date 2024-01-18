// 마구간 정하기(결정 알고리즘)
const Sol12 = () => {

  const arr = [1,2,8,4,9];

  const solution = (num,arr) => {
    let answer;

    arr.sort((a,b) => a-b,0);
    let lt = 1;
    let rt = arr[arr.length-1]; // 9
    while(lt<=rt){
      let mid = Math.floor((lt+rt)/2); // 1. 10/2=5, 7. 5/2=2 (...반복!)
      let cnt = 1; // 말 마릿수
      let ep = arr[0]; 

      // [1,2,4,8,9]
      for(let i=1; i<arr.length; i++){
        // 2. 8-1 >= 5 , 5. 9-8 >= 5 실행x
        if(arr[i]-ep >= mid){
          cnt++; // 3. cnt=2,
          ep = arr[i] // 4. ep = 8
        }
      }
      
      // 5. 2 >= 3
      if(cnt >= num) {
        answer = mid;
        lt = mid+1; 
      }else{
        rt = mid-1;// 6. rt=4
      }
    }
    return answer;
  }

  console.log(solution(3,arr))

  return ( 
    <div>

    </div>
  );
}

export default Sol12;