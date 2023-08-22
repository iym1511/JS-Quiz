const Quiz64 = () => {

  let N = parseInt(prompt('정량을 입력하세요'), 10);
  let result = 0;
  
  // ex) 30
  const test = () => {
    while (true){
      // 4. 21은 나머지몫이 0 이니 result + 3 을 해줌
      if (N%7 === 0){
        result += parseInt(N/7, 10);
        console.log(result); // 5. 1,2,3 에서 3을 만들어줬으니 3+3 = 6;
        break;
      }
      // 1. 30이 if문에 해당되지않으니 -3을 해준 후 result + 1
      // 2. 27가 if문에 해당되지않으니 -3을 해준 후 result + 1
      // 3. 24가 if문에 해당되지않으니 -3을 해준 후 result + 1
      N -= 3;
      result += 1;
      console.log(N, result)
      if (N < 0){
        console.log(-1);
        break;
      }
    }
  }

  console.log(test())


  return (  
    <>
    </>
  );
}

export default Quiz64;