// 문자열 나누기

const Solution73 = () => {

  const s = "aaabbaccccabba";

  // 83.3점 받은 내 코드 (거의 맞춘코드와 크게 다르지 않다)
  // const solution = (s) => {
  //   let sCopy = s;
  //   let sameCount = 0;
  //   let otherCount = 0;
  //   let answer = 0;
    
  //   for(let i = 0; i < sCopy.length; i++){

  //     if(sCopy[0] === sCopy[i]){
  //       sameCount++;
  //     } else {
  //       otherCount++;
  //     }

  //     if(sameCount === otherCount){
  //       console.log(sCopy[i])
  //       answer++;
  //       sCopy = sCopy.slice(i+1);
  //       sameCount = 0;
  //       otherCount = 0;

  //       // -1 로 해줘야 끝날때 +1 되어서 0부터 시작
  //       i = -1;
  //     }else if(sCopy.length < 2){
  //       answer++;
  //     }
  //   }
    
  //   return answer;
  // }


  // 첫글자와 같은수의 개수, 다른수 의 개수 가 count(+-) 로 같은개수가되어 0 이 되었을때
  // 다시 for문을 시작할때 해당 s의 [index]값으로 첫글자를 지정해준뒤 같은방법으로 비교한다.
  function solution(s) {
      let answer = 0;
      let current;
      let count = 0;
  
      for(let i = 0; i < s.length; i++) {
          if(count === 0) {
            current = s[i]
            answer++; // 1. 1
            count = 1
          } else {
              if(current !== s[i]) count--; // 4. 3-1 = 2 / 5. 2-1= 1 / 7. 1 / 8. 0
              else count++; // 2. count 2 / 3. 3 / 6. 2 
          }
      }
  
      return answer;
  }

  console.log(solution(s));

  return (  
    <div>
      
    </div>
  );
}

export default Solution73;