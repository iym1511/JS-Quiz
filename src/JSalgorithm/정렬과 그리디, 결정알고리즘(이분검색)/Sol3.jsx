// Special Sort(구글 인터뷰)버블정렬 응용 
const Sol3 = () => {

  const arr = [1 ,2 ,3 ,-3 ,-2 ,5 ,6 ,-6];

  const solution = (arr) => {
    let answer;
    for(let i=0; i<arr.length-1; i++){
      for(let j=0; j<arr.length-i-1; j++){
        // 첫번째가 양수거나 두번째가 음수면 앞 뒷자리 바꿈
        if(arr[j] > 0 && arr[j+1] < 0){
          [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        }  
      }
      console.log(arr);
    }
    return answer;
  };

  console.log(solution(arr));

  return ( 
    <div>

    </div>
  );
}

export default Sol3;