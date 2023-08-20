import { useEffect, useState } from "react";

const Quiz52 = () => {

  
  // 9 2 4 6 3
  function quickSort(arr){
    if (arr.length <= 1){
      return arr;
    }
    // 첫번째 return 인자 2,4,6,3

    const pivot = arr[0]; // 9 / 
    const left = [];
    const right = [];
    // length = 5
    for (let i=1; i<arr.length; i++){ 
      if(arr[i] < pivot){
        left.push(arr[i]); // (1). 2,4,6,3 < 9 / (3). 6,3 < 4  6은 right 3은 left
      } else {
        right.push(arr[i]); // (2). 4,6,3 < 2 
      }
    }
    // 3바퀴 다 돌면 [3,4,6]
    console.log(left,right)
    console.log(quickSort(left).concat(pivot, quickSort(right)))
    return quickSort(left).concat(pivot, quickSort(right));
  }
  
  const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
  
  console.log(quickSort(array));

  return (  
    <>
    </>
  );
}
 
export default Quiz52;