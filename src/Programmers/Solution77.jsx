// 햄버거만들기(push,pop)
const Solution77 = () => {
  // const ingredient = [1, 3, 2, 1, 2, 1, 3, 1, 2];
  const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];

  const solution = (ingredient) => {
    let answer = 0;
    let stack = [];
    ingredient.forEach((a) => {
      stack.push(a);
      const sLength = stack.length

      // stack배열에 4개의 배열이 생겼을떄 if문 이 모두 일치
      // (반복) 1. 2112-false / 2. 1123-false / 3. 1231 - true (pop으로 마지막 요소 4번 제거)
      if(stack[sLength-4] === 1 && stack[sLength-3] === 2 &&  stack[sLength-2] === 3 && stack[sLength-1] === 1){
        for(let i=0;i<4;i++){
            stack.pop()
        }
        answer++ // if모두 일치할때 answer++;
      } 
    });

    return answer;
  }

  console.log(solution(ingredient));

  return (  
    <div>

    </div>
  );
}

export default Solution77;