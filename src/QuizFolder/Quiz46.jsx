const Quiz46 = () => {

  const arrayNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  const sumArray = []

  arrayNum.map((a) => {
    // map 안의 Number는 (a) => Number(a) 와 같다.
    const digits = a.toString().split('').map(Number);
    sumArray.push(...digits)
  })
  console.log(sumArray)

  // 정답 코드
  let arr = [];
  let sum = 0;
  
  for (let i=0; i<20; i++){
    arr[i] = i+1;
  }
  
  arr.forEach((n) => {
    while(n !== 0){
      sum += (n % 10);
      n = Math.floor(n/10);
    }
  })
  
  console.log(sum);

  
  
  
  return (  
    <div>

    </div>
  );
}

export default Quiz46;