// N개의 최소공배수
const Solution108 = () => {
  const arr = [2, 6, 8, 14];

  // const solution = (arr) => {
  //   let arrMax = Math.max(...arr);
  //   let sum = 0;
  //   let count = 0;

  //   while (count !== arr.length) {
  //     sum += arrMax * 2;
  //     for (let i = 0; i < arr.length; i++) {
  //       if (sum % arr[i] === 0) {
  //         count++;
  //       } else {
  //         count = 0;
  //         break;
  //       }
  //     }
  //   }

  //   return sum
  // };

  // every는 메서드 배열 요소가 전부 통과인지 확인(하나라도아니면false)
  function solution(arr) {
    arr.sort((a,b)=>b-a)
    let answer;
    let isDivide=false;
    let whileCount = arr[0];
    while(!isDivide){
        isDivide = arr.every((number)=>whileCount%number === 0)
        if(isDivide){
          answer = whileCount
          break
        }
        // 전부 true가 나올때 까지 ++
        whileCount++
    }
    return answer
}

  console.log(solution(arr));

  return <div></div>;
};

export default Solution108;
