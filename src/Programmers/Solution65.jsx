// 문자열 내맘대로 정렬하기

// 일반적으로, 반환 값이 양수일 때는 a가 b보다 크다고 간주하고 내림차순으로 정렬되며,
// 반환 값이 음수일 때는 a가 b보다 작다고 간주하여 오름차순으로 정렬됩니다. 

const Solution65 = () => {

  const strings = ["abce", "abcd", "cdx"];
  const n = 2;
  // let result = []
  // console.log(strings.sort((a,b) => {
  //   if(a < b){
      
  //     return result.push(b)
  //   }else{
  //     return result.unshift(a,b)
  //   }
  // }));

  // console.log(result)


// 💡 내가 조금만 더 생각했으면 됬던것
// function solution(strings, n) {
//     // strings 배열
//     // n 번째 문자열 비교
//     return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
// }


  const solution = (strings, n) => {
    strings.sort((a,b)=>{
      // n번째 기준 정렬
      if(a[n] !== b[n]){
          return a[n] > b[n] ? 1 : -1
      }
      // string 기준 정렬 
      return a > b ? 1 : -1
  })
  return strings
  };

  console.log(solution(strings, n));

  return (  
    <div>

    </div>
  );
}

export default Solution65;