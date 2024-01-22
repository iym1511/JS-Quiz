// 재귀함수를 이용한 이진수 출력
const Sol2 = () => {

  const solution = (n) => {
    let answer = "";
    const DFS = (L) => {
      if (L === 0) return;
      else {
        // 5.5, 2.5, 1, 0.5
        DFS(parseInt(L / 2)); // 여기서 재귀함수 계속 실행
        answer += String(L % 2); // L=0이되서 재귀함수가 끝나면 stack에서pop되듯이 실행
      }
    };
    DFS(n);

    return answer;
  };

  console.log(solution(11));

  return <div></div>;
};

export default Sol2;
