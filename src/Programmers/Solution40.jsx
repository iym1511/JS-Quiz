// 두 개 뽑아서 더하기
const Solution40 = () => {
  const numbers = [2, 1, 3, 4, 1];

  const solution = (numbers) => {
    let answer = [];
    let set = new Set();
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        if (j !== i) {
          set.add(numbers[j] + numbers[i]);

        }
      }
    }
    set.forEach((a) => {
      answer.push(a);
    })
    return answer.sort((a, b) => a - b);
  };

  console.log(solution(numbers));

  return <div></div>;
};

export default Solution40;
