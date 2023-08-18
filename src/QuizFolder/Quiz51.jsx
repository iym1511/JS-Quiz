const Quiz51 = () => {

  // [3,9,7,2,4] 입력을 가장
  function mergeSort(arr){
    if (arr.length <= 1){
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2); // 5/2 = 2.5 즉 2

    const left = arr.slice(0,mid); // 0,2 0부터 두번째 까지라서 [3,9]
    const right = arr.slice(mid); // index 2 부터 추출 [7,2,4]

    // left : [3,9]    right : [7,2,4]
    // mergeSort로 재귀정렬해서 들어감 left : [3,9]    right : [2,4,7]
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right){
    let result = [];
    while (left.length && right.length){
      if (left[0] < right[0]){
        console.log(result)
        // 배열 첫번째 수 를 push
        result.push(left.shift()); // 2. 3 < 4 라서 3 push 
      } else {
        console.log(result)
        result.push(right.shift()); // 1. 3 < 2 라서 2 push / 4. 9 < 4 라서 4 push / 5. 9 < 7 이라서 7 push
      }
    }
    while (left.length) {
      result.push(left.shift())
    }

    while (right.length) {
      // right에 9만 남았으니까 9push
      result.push(right.shift())
    }

    // 결과 = [2,3,4,7,9]
    return result;
  }
  
  const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

  console.log(mergeSort(array));
  

  return (  
    <div>

    </div>
  );
}
 
export default Quiz51;