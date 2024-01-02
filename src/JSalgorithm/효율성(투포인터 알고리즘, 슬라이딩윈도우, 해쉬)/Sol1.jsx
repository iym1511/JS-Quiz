const Sol1 = () => {
  const arr1 = [1, 3, 5];
  const arr2 = [2, 3, 6, 7, 9];

  const solution = (arr1, arr2) => {
    let answer = [];

    let n = arr1.length; // 3
    let m = arr2.length; // 5
    let p1 = 0;
    let p2 = 0;

    // for문으로 작성한 나의 방법
    // for(let i=0; i<arr1.length+arr2.length; i++){
    //   if(arr1[p1] <= arr2[p2]){
    //     answer.push(arr1[p1++]);
    //   }else{
    //     answer.push(arr2[p2++]);
    //   }
    // }

    // while문으로 작성한 강의 방법
    while (p1 < n && p2 < m) {
      if (arr1[p1] <= arr2[p2]) {
        answer.push(arr1[p1++]);
      } else {
        answer.push(arr2[p2++]);
      }
    }

    // while문의 조건을 쪼게서 위에 while문에서 충족이 되지않은 쪽을
    // 마저 진행시켜주어 남은수를 배열에 추가한다. 
    while(p1<n) answer.push(arr1[p1++]);
    while(p2<m) answer.push(arr2[p2++]);

    return answer;
  };

  console.log(solution(arr1, arr2));

  return <div></div>;
};

export default Sol1;
