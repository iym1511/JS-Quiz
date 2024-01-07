// 모든 아나그램 찾기(Hash & Sliding Window && Two Pointers Algorithm)
const Sol8 = () => {

  const s = "bacaAacba"; 
  const t = "abc";

  const compareMaps = (map1,map2) => {
    // 길이가 다르면 false
    if(map1.size !== map2.size) return false;
    for(let [key, value] of map1){
      // key값이 다르면 false || value값이 달라도 false
      if(!map2.has(key) || map2.get(key) !== value) return false
    }
    return true
  }

  const solution = (s,t) => {
    let answer=0;
    let tH = new Map();
    let sH = new Map();

    // tH = a=1, b=1, c=1
    for(let x of t){
      if(tH.has(x)) tH.set(x, tH.get(x)+1); // 있으면 1씩증가
      else tH.set(x,1); // 없으면 1시작
    }

    // sh = b=1, a=1 시작
    // c를 추가해서 3개씩 움직이기 위한 코드
    let len = t.length-1;
    for(let i=0; i<len; i++){
      if(sH.has(s[i])) sH.set(s[i], sH.get(s[i])+1); // 있으면 1씩증가
      else sH.set(s[i],1); // 없으면 1시작
    }

    // 1.추가 3.검사후 answer++ 3.삭제 
    let lt=0;
    for(let rt=len; rt<s.length; rt++){
      if(sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt])+1); // 있으면 1씩증가
      else sH.set(s[rt],1); // 없으면 1시작

      if(compareMaps(sH,tH)) answer++;
      // 다음칸 비교를위해 해당 첫번째칸 마이너스1(다음칸으로 넘어가기땜에 존재하지않아서)
      sH.set(s[lt], sH.get(s[lt])-1);
      // 마이너스 1 을 해서 0이되면 3칸 이내에 없는것이므로 삭제
      if(sH.get(s[lt]) === 0) sH.delete(s[lt]);
      lt++; // 증가시켜서 칸 앞으로 당김
      console.log(sH)
    }

    return answer;
  }

  console.log(solution(s,t))

  return (  
    <div>
      
    </div>
  );
}
 
export default Sol8;