// 아나그램(Hash Map)
const Sol7 = () => {
  const str1 = "AbaAeCe";
  const str2 = "baeeACA";
  // const str1 = "abaCC";
  // const str2 = "Caaab";

  /** 실행함수 */
  const solution = (str1, str2) => {
    let answer = "YES";
    const map1 = new Map();
    const map2 = new Map();
    for (let i = 0; i < str1.length; i++) {
      if (map1.has(str1[i])) {
        map1.set(str1[i], map1.get(str1[i]) + 1);
      } else {
        map1.set(str1[i], 1);
      }
    }

    // 강의 내용코드
    // map1 에 str2[i]가 없거나 str2[i]가 0 이면 return "NO"
    // 일치하는 str2[i]를 찾을때마다 -1씩감소하니까 나는있는데 상대방은 없음
    // 문자열 개수가일치하면 if문에서 0을 검사 할 수가 없음
    for(let i = 0; i< str2.length; i++){
      if(!map1.has(str2[i]) || map1.get(str2[i]) === 0) return "NO";
      map1.set(str2[i], map1.get(str2[i])-1)
    }


    // 내 방법(맞는코드)
    // for (let i = 0; i < str2.length; i++) {
    //   if (map2.has(str2[i])) {
    //     map2.set(str2[i], map2.get(str2[i]) + 1);
    //   } else {
    //     map2.set(str2[i], 1);
    //   }
    // }
    
    // for(let i = 0; i< str1.length; i++){
    //   if(map1.get(str1[i]) === map2.get(str1[i])){
    //     return answer
    //   }else{
    //     return answer = "NO"
    //   }
    // }


    return answer;
  };

  console.log(solution(str1, str2));

  return <div></div>;
};

export default Sol7;
