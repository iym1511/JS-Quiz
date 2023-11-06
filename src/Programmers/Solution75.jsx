// 덧칠하기
const Solution75 = () => {

  let n = 8;
  let m = 4;
  let section = [2, 3, 6];
  // 4개의 칠 범위안에 section이 있으면 count++
  // const solution = (n, m, section) => {
  //   let answer = 0;
    
  //   let count = 1;
  //   let result = [];
  //   let results = {}

  //   for(let i = 1; i<=n; i++){
  //     if(section.indexOf(i)){    
  //       console.log("asd")
  //     }
  //   }

  //   // result.forEach((a)=> {
  //   //   if(section.includes(a)) {
  //   //     section.splice(section.indexOf(a), 1);
  //   //     count++
  //   //   }
  //   // })
  //   // console.log(count)

  //   // for(let i = 1; i<=n; i++){
  //   //   if(!section.includes(i)){
  //   //     results[i] = 1
  //   //   }else{
  //   //     results[i] = 0
  //   //   }
  //   // }


  //   // for(let key in results){
  //   //   if(results[key] == 0 && results[Number(key)+3] != undefined){
  //   //     answer++;
  //   //     console.log(results[key], results[Number(key)+1], results[Number(key)+2], results[Number(key)+3])
  //   //   }
  //   // }
    
  //   // for(let j = 1; j<=n; j++){
  //   //   if(results[j] == 0){
  //   //     count++;
  //   //     if(results[j + m-1] == 0){
  //   //       return answer = count
  //   //     }
  //   //   }
  //   // }


  //   return answer;
  // }

  function solution(n, m, section) {
    let tried = 0
    // 4줄 증가후 마지막 번호 저장
    let maxRange = 0
    section.forEach(range=>{
      // 마지막 번호보다 range가 작으면 포함되있기 때문에 넘어가고
      // range가 더 크면 포함되어 있지 않기 때문에 실행
        if(maxRange < range){
            tried++
            maxRange = range+m-1 // 현재 위치에서 4줄만큼 증가
        }
    })
    return tried
}

  console.log(solution(n, m, section));

  return (  
    <div>

    </div>
  );
}
export default Solution75;