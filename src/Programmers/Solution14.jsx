// 배열 만들기2
const Solution14 = () => {

  const l = 5;
  const r = 555;

  const solution = (l, r) => {
    let result = [];
    for(let i = l; i <= r; i++){
      const changeStr = String(i);
      if(/^[50]+$/.test(changeStr)){
        result.push(changeStr);
      }else {
        result.push(-1);
      }
    }
    return result
  };

  console.log(solution(l, r));

  return (  
    <div>

    </div>
  );
}
 
export default Solution14;