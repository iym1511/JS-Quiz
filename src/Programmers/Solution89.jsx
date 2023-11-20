// 대충만든 자판 복습 풀이성공
const Solution89 = () => {

  const keymap = ["AA"];
  const target = ["B"];
  
  const solution = (keymap, target) => {
    let answer = [];
  
    let list = {}
  
    keymap.forEach((a,index1)=>{
      a.split("").forEach((b,index2) => {
        if(list[b] == undefined){
          list[b] = index2+1
        }else if(list[b] > index2){
          list[b] = index2+1
        }
      })
    })
  
    target.forEach((a,index1) => {
      let sum = 0;
      let isPossible = true;
      a.split("").forEach((b,index2) => {
        if(list[b] == undefined){
          isPossible = false;
          return;
        }
        sum += list[b];
      })
      if (isPossible) {
        answer.push(sum);
      } else {
        answer.push(-1);
      }
    })
  
    return answer;
  }
  
  console.log(solution(keymap,target))

  return (  
    <div>

    </div>
  );
}
 
export default Solution89;