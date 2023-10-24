const Solution58 = () => {
  const n = 8;
  const m = 4;
  const section = [2, 3, 6];

  // function solution(n, m, section) {
  //   let answer = 0;
  //   let result = [];
  //   let resultAry = [];
  //   let save = [];

  //   for(let i = 1; i<=n; i++){
  //     result.push(i);
  //   }

  //   for(let i = 1; i<=n; i++){
  //     if(result.slice(i-1, m+i-1).length == 4){
  //       const chunk = result.slice(i-1, m+i-1);
  //       resultAry.push(chunk)
  //     }
  //   }
    
  //   for(let i = 0; i<m; i++){
  //     // console.log(resultAry[i].filter((a) => a === section[i]))
  //     for(let j = 0; j<m; j++){
  //       const numValue = resultAry[i][j];
  //       if(section.find((a) => a == numValue)){
  //         if(!save.includes(numValue)){
  //           save.push(numValue);
  //         }
  //       }
  //     }
      
  //   }

    // console.log([1,2,3,4].find((a) => a == section[i] ))

    // console.log(resultAry.find((a) => {

    //   section.map((s) => {
    //     if(s == a){
    //       console.log(a);
    //     }
    //   })
    // }))


  //   return answer;
  // }
  
  // (나의 해석)
  // 이 코드는 max가 첫번째 시도에서 부터 4칸을 칠했을때 마지막 index가 max이고
  // if문 은 마지막 칠의 index보다 작으면 이미 칠 해졌다는 것이니
  // 그 이상인 것에다가 칠을 해야함
  function solution(n, m, section) {
    let answer = 0;
    let max = 0;
    section.forEach((s) => {
      // 1. 2 > 0, 4. 3 > 5 x , 5. 6 > 5
      if (s > max) {
        answer++; // 2. answer = 1 // 6. answer = 2
        max = s + m - 1; // 3. max = 2 + 4 - 1 = 5, 7. max = 6 + 4 - 1 = 9
      }
    });
    return answer;
  }
  console.log(solution(n, m, section))
  return <div></div>;
};

export default Solution58;
