const Solution92 = () => {

  const board = [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
  ];

  const moves = [1,5,3,5,1,2,1,4];
  // [0][i] 가 되면서 1번 크레인의 0이 아닌것들 뽑아내야함
  function solution(board, moves) {
    let answer = 0;
    let stack = [];

    for(let i = 0; i<moves.length; i++){
      const move = moves[i] - 1;
      for(let j = 0; j<board.length; j++){
        if(board[j][move] !== 0){
          if(stack[stack.length-1] != board[j][move]){
            stack.push(board[j][move])
          }else{
            stack.pop();
            answer += 2
          }
          board[j][move] = 0; // 인형이 뽑힌 위치의 값을 0으로 변경하여 뽑힌 것을 나타냅니다.
          break;
        }
      }
    }

    return answer;
  }

  console.log(solution(board, moves));

  return <div></div>;
};

export default Solution92;
