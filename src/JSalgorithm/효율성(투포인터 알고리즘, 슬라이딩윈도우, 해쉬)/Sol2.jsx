const Sol2 = () => {

  const arr1 = [1,3,9,5,2];
  const arr2 = [3,2,5,7,8];

  const solution = (arr1,arr2) => {
    let answer =[];
    let p1=0;
    let p2=0;
    arr1.sort();
    arr2.sort();

    // 내가 작성한 방법
    // while (p1 < arr1.length && p2 < arr2.length) {
    //   if (arr1[p1] <= arr2[p2]) {
    //     if(arr1[p1] === arr2[p2]) answer.push(arr1[p1++]);
    //     else p1++
    //   } else {
    //     p2++
    //   }
    // }

    // 강의 방법
    // [1, 2, 3, 5, 9]
    // [2, 3, 5, 7, 8]
    while (p1 < arr1.length && p2 < arr2.length) {
      if (arr1[p1] === arr2[p2]) {
        answer.push(arr1[p1++]);
        p2++;
      } else if(arr1[p1]<arr2[p2]) {
        p1++;
      } else {
        p2++;
      }
    }

    return answer;
  }

  console.log(solution(arr1,arr2));

  return ( 
    <div>

    </div>
   );
}
 
export default Sol2;