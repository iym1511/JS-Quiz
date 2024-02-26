const Sol3 = () => {
  const solution = (n) => {
    let answer = [];
    let ch = Array.from({ length: n + 1 }, () => 0);
    const DFS = (L) => {
      if (L === n + 1) {
        let tmp = "";
        for (let i = 1; i <= n; i++) {
          if (ch[i] === 1) tmp += i + " ";
        }
        if (tmp.length > 0) answer.push(tmp.trim());
      } else {
        ch[L] = 1;
        DFS(L + 1);
        ch[L] = 0;
        DFS(L + 1);
      }
    };
    DFS(1);
    return answer;
  };
  console.log("부분집합 구하기", solution(3));

  const solution2 = (n, arr) => {
    let answer = "NO";
    let flag = 0;
    let total = arr.reduce((a, b) => a + b, 0);
    const DFS = (L, sum) => {
      // 함수 중지시키는 역할
      if (flag === 1) return;
      if (L === n) {
        if (sum === total - sum) {
          answer = "yes";
          flag = 1;
        }
        console.log(sum);
      } else {
        DFS(L + 1, sum + arr[L]); // 1. 4+1, 15 + 7 / 2. 5+1 15+10
        DFS(L + 1, sum); // 1. 4+1, 15
      }
    };
    DFS(0, 0);
    return answer;
  };
  console.log(solution2(6, [1, 3, 5, 6, 7, 10]));

  const solution3 = (max, arr) => {
    let answer = 0;
    let n = arr.length;
    
    const DFS = (L, sum) => {
      // 백트래킹
      if (sum > max) return;
      if (L === n) {
        answer = Math.max(answer, sum);
      } else {
        DFS(L + 1, sum + arr[L]);
        DFS(L + 1, sum);
      }
    };
    DFS(0, 0);

    return answer;
  };
  console.log(solution3(259, [81, 58, 42, 33, 61]));

  return <div></div>;
};

export default Sol3;
