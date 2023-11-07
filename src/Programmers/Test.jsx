const Test = () => {

  const keymap = ["ABACD", "BCEFD"];
  const targets = ["ABCD", "AABB"];

  const solution = (keymap, targets) => {
    let result = {};

    keymap.forEach((keymap) => {
      keymap.split('').map((a,i) => {
        if(result[a] === undefined){
          result[a] = i + 1
        }else{
          result[a] = Math.min(result[a], i+1); // 둘중 작은것 
        }
      })
    });

  // 값 합산
  const keySum = targets.map((a) =>
      a.split('').reduce((sum,a)=>{
        return sum+result[a];
      },0));
  

  // 값이 없을때
  const empty = keySum.map((a) => {
    return isNaN(a) ? -1 : a
  })



    return empty
  };




  console.log(solution(keymap, targets))

  return (  
    <div>

    </div>
  );
}
 
export default Test;
