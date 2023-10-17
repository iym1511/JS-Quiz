// K번째 수

const Solution49 = () => {

  const array = [1,5,2,6,3,7,4];
  const commands = [[2,5,3],[4,4,1],[1,7,3]];

  const solution = (array, commands) => {
    let answer = [];
    commands.forEach(([i,j,k]) => {
      answer.push(array.slice(i-1, j).sort((a,b) => a - b)[k-1]);
    })
    return answer;
  }

  console.log(solution(array, commands));

  return (  
    <div>

    </div>
  );
}

export default Solution49;