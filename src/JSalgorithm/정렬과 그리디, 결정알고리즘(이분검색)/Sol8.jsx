// 회의실 배정
const Sol8 = () => {

  const arr = [[1,4],[2,3],[3,5],[4,6],[5,7]];
  // const arr = [[3,3],[1,3],[2,3]];

  const solution = (arr) => {
    let answer = 0;
    arr.sort((a,b) => {
      if(a[1] === b[1]) return a[0]-b[0]
      else return a[1] - b[1]
    })
    
    let et=0;
    for(let i=0; i<arr.length; i++){
      if(arr[i][0] >= et){
        answer++
        et = arr[i][1]
      }
    }

    return answer;
  }

  console.log(solution(arr));

  return ( 
    <div>

    </div>
  );
}

export default Sol8;