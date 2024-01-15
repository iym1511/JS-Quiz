// 좌표 정렬
const Sol7 = () => {

  const arr = [[2,7], [1,3], [1,2], [2,5], [3,6]]

  const solution = (arr) => {
    let answer=arr;
    arr.sort((a,b) => {
      if(a[0] === b[0]) return a[1]-b[1]
      else return a[0]-b[0]
    });

    return answer;
  }

  console.log(solution(arr));

  return ( 
    <div>

    </div>
  );
}

export default Sol7;