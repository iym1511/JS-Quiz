// 버블 정렬
const Sol2 = () => {

  const arr = [13, 5, 11, 7, 23, 15];
  // 5 13 11 7 23 15
  // 5 11 13 7 23 15
  // 5 11 7 13 23 15
  // 5 11 7 13 23 15
  // 5 11 7 13 15 23

  // 5 11 7 13 15 23
  // 5 7 11 13 15 23 끝

  // 한바퀴씩 도는게 줄어들기 위해 arr.length-i-1 해야함
  // 4, 3, 2, 1
  const solution = (arr) => {
    let answer;
    for(let i=0; i<arr.length-1; i++){
      for(let j=0; j<arr.length-i-1; j++){
        if(arr[j] > arr[j+1]){
          [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        }  
      }

    }

    return answer;
  };

  console.log(solution(arr));

  return ( 
    <div>

    </div>
  );
}

export default Sol2;