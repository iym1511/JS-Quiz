// 귤 고르기
const Solution106 = () => {

  const k = 6;
  const tangerine = [1, 3, 2, 5, 4, 5, 2, 3];

  const solution = (k, tangerine) => {
    let answer = 0;
    let obj = {}
    tangerine.map(e => {
      if(!obj[e]){
          obj[e] = 1
      }else{
          obj[e] += 1;
      }
    }) 

    // 객체의 value 내림차순
    let values = Object.values(obj).sort((a,b)=>b-a)

    for(const value of values){
        answer++
        // 6-2=4, 4-2=2, 2 <= 2 break // 결과 answer=3
        if(k-value<=0) break
        else k-= value
    }

    return answer;
  }

  console.log(solution(k, tangerine));

  return (  
    <div>

    </div>
  );
}

export default Solution106;