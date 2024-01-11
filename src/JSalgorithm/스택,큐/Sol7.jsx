// 교육과정 설계 (큐)
const Sol7 = () => {
  const s = "CBA";
  const sub = "CBDAGE";

  // 내방법(indexOf를 사용했지만 똑같이 맞는 방법)
  // const solution = (s, sub) => {
  //   let answer = "YES";
  //   let queue = s.split("");
  //   for (let j = 0; j < sub.length; j++) {
  //     let subArr = sub.split("");
  //     if (queue.includes(subArr[j])) {
  //       if(queue.indexOf(subArr[j]) !== 0) return answer = "NO"
  //       queue.shift();
  //     }
  //   }

  //   return answer;
  // };

  // 강의 방법 (queue.shift()는 앞쪽을 빼주니까 앞쪽 값과 배열값이)
  const solution = (s, sub) => {
    let answer = "YES";
    let queue = s.split("");
    for (let j = 0; j < sub.length; j++) {
      let subArr = sub.split("");
      // 필수강의 포함하는것 CBA 
      if (queue.includes(subArr[j])) {
        // 만약 CAB일경우 두번째에 A와B는 다르기때문에 "NO"
        if(queue.shift() !== subArr[j]) return answer = "NO"
      }
    }
    if(queue.length > 0) return answer = "NO"

    return answer;
  };

  console.log(solution(s, sub));

  return <div></div>;
};

export default Sol7;
