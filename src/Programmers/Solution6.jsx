const Solution6 = () => {

  const numList = [3, 4, 5, 2, 1];
  // const numList = [5, 7, 8, 3];

  const solution = (numList) => {
    let resultSave = 0;

    // 모든 원소의 곱
    const result1 = numList.reduce((a, b) => a * b);

    // 합의 제곱
    const result2 = numList.reduce((a, b) => (a + b));
    resultSave = result2 * result2;

    return  result1 < resultSave ? 1 : 0;
  }

  console.log(solution(numList));

  return (  
    <div>

    </div>
  );
}

export default Solution6;