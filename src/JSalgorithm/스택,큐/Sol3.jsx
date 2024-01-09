// 크레인 인형뽑기(스택)
const Sol3 = () => {
  const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ];
  const moves = [1, 5, 3, 5, 1, 2, 1, 4];
  // 4 3 1 1 3 2 4

  const solution = () => {
    let answer = 0;
    let temp = [];

    for (let i = 0; i < moves.length; i++) {
      for (let j = 0; j < board.length; j++) {
        // 해당 크래인 자리가 (0은빈값) 비어있지않으면 push
        if (board[j][moves[i] - 1] !== 0) {
          // 저장소(temp)의 마지막 인형(정수)와 이번에뽑는인형(정수)이 다르면 Push
          // 같으면 두개가 같으므로 Pop
          if (temp[temp.length - 1] !== board[j][moves[i] - 1]) {
            temp.push(board[j][moves[i] - 1]);
            board[j][moves[i] - 1] = 0;
          } else {
            temp.pop();
            answer += 2;
          }
          break;
        }
      }
    }

    return answer;
  };

  console.log(solution(board, moves));

  return <div></div>;
};

export default Sol3;
