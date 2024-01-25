// 중복순열 구하기
const Sol8 = () => {
  const solution = (n, m) => {
    let answer = [];
    let tmp = Array.from({ length: m}, () => 0);
    
    const DFS = (L) => {
      if (L === m) {
        answer.push(tmp.slice())
      } else {
        for (let i = 1; i <= n; i++) {
          tmp[L] = i;
          DFS(L+1); // 3일때 백트레킹되어서 다시 돌아와서 1에서 마무리되었던 for문 마저 실행
        }
      }
    };
    DFS(0);

    return answer;
  };

  console.log(solution(3,2));

  return <div></div>;
};

export default Sol8;
