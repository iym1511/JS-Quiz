// 최소 직사각형
const Solution32 = () => {

  const sizes = [[60, 50], [30, 70], [60, 30], [80, 40]];

  const solution = (sizes) => {
    let maxW = 0;
    let maxH = 0;

    sizes.forEach(([w, h],i) => {
      if(w < h){
        [sizes[i][0], sizes[i][1]] = [sizes[i][1], sizes[i][0]]
      }
      maxH = Math.max(maxH, sizes[i][1]);
      maxW = Math.max(maxW, sizes[i][0]);
    })
    return maxW * maxH
  }

  console.log(solution(sizes));

  return (  
    <div>

    </div>
  );
}
 
export default Solution32;