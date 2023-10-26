const Solution61 = () => {
  // 최대공약수 = 두 수의 약수 중에 제일 높은것
  // 최소공배수 = 두 수의 같은 배수 중에 제일 낮은것 


  // 
  // function solution(n, m) {
  //   let nCopy = n;
  //   let mCopy = m;
  //   let answer = [];
  //   let nAry = [];
  //   let mAry = [];

  //   for(let i = 1; i <= m; i++){
  //     // 최대 공약수
  //     if(m % i === 0){
  //         nAry.push(i);
  //     }
  //     if(n % i === 0){
  //       mAry.push(i)
  //     }
  //     let findNums = nAry.find((a,i) => a == mAry[i])
  //     answer.push(Math.max(findNums))
  //     nAry = [];
  //     mAry = [];

  //     // console.log(nAry,mAry)
  //     // 최소 공배수
  //     // if(n * i == m){
  //     //   answer.push(n * i);
  //     // }

  //   }
  //   for(let i = 1; i<=m; i++){
        
  //     console.log(nCopy)
  //   }


  //   return answer;
  // }

  const n = 3;
  const m = 12;

  function solution(n, m) {
    let maxNum = 0;
    for(let i=1;i<=Math.min(n,m);i++){
      console.log(3 % i === 0);
      console.log(12 % i === 0);
        if(Math.max(n,m) % i === 0 && Math.min(n,m) % i === 0)
            maxNum = i
          console.log(maxNum)
    }

    const answer = [maxNum , n * m / maxNum]
    return answer
}

  console.log(solution(n ,m))

  return (  
    <div>

    </div>
  );
}
 
export default Solution61;