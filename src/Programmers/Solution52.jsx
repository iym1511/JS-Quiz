const Solution52 = () => {
  const N = 5;
  const stages = [2, 1, 2, 6, 2, 4, 3, 3];

  function getKeyByValue(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
  }

  function solution(N, stages) {
    let reStages = stages;
    let answer = [];
    let stagesSort = stages.sort((a, b) => a - b);
    const sets = new Set(stagesSort); // 1,2,3,4,6
    const arraySet = Array.from(sets)
    let result = {};
    let x = stages.length;
    let ary = [x];

    
    // stagesSort.forEach((a,i) => {
    //   result[a] = (result[a] || 0)+1;
    // })

    for(let i = 1; i<=N; i++){
      const filterAry = reStages.filter((a) => a === i).length;
      result[i] = filterAry / reStages.length;
      // i 와 다른수들만 재정의 해주어서 이미 구한 실페율 스테이지 제외 남은것들의 길이랑 나눔
      reStages = reStages.filter((num) => i !== num);
      console.log(result);
    }

    reStages.forEach((a,i) =>{

    });

    


    Object.values(result).forEach((a,i)=> {
      
 // 1,3,2,1,1
      if(ary.length !== 5){
        if(ary == ''){
          ary.push(x = x - a); // 1. 7
        }
        if(i+1 !== arraySet[i]){
          ary.push(0);
        }
        else if(i+1 === arraySet[i] && ary.length != N){
          ary.push(x = x - a); // 2. 4 // 3. 2 // 4. 1
        }
      }
      console.log(ary)
    });

    
    for(let i = 0; i<N; i++){
      // console.log(Object.values(result)[i] / ary[i])
    }


    return answer;
  }

  console.log(solution(N, stages));

  return <div></div>;
};

export default Solution52;
