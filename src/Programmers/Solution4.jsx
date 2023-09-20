// 등차수열의 특정한 항만 더하기

const Solution4 = () => {
  let a = 3;
  let b = 4;
  let included = [true, false, false, true, true];

  // 내 풀이
  // function solution(a, b, included) {
  //   let result = 0;
  //   let sum = 0;
  //   for(let i = 0; i < included.length; i++){
  //     i === 0 ? (sum+=a) : (sum+=b); 
  //     if(included[i] === true){
  //       result += sum
  //     }
  //   }
  //   return result
  // }


  // 다른사람의 베스트 풀이
  // acc 누적값
  function solution(a, d, included) {
      return included.reduce((acc, flag, i) => {
        console.log(acc,a,d,i)
          return flag ? acc + a + (d * i) : acc
      }, 0)
  }
  
  console.log(solution(a, b, included));

  return (  
    <div>
      <p>{}</p>
    </div>
  );
}

export default Solution4;