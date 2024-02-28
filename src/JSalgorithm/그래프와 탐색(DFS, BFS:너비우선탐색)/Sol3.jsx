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

  const solution4 = (arr, m) => {
    let answer = 0;
    let len = arr.length;
    const DFS = (L, sum, time) => {
      if (time > m) return;
      if (L === len) {
        answer = Math.max(answer, sum);
      } else {
        DFS(L + 1, sum + arr[L][0], time + arr[L][1]);
        DFS(L + 1, sum, time);
      }
    };
    DFS(0, 0, 0);
    return answer;
  };
  console.log(
    "최대점수 구하기(DFS)",
    solution4(
      [
        [10, 5],
        [25, 12],
        [15, 8],
        [6, 3],
        [7, 4],
      ],
      20
    )
  );

  const solution5 = (n, l) => {
    let answer = [];
    let tmp = Array.from({ length: l }, () => 0);
    const DFS = (L) => {
      if (L === l) {
        answer.push(tmp.slice());
      } else {
        // tmp[0]을 실행 후 tmp[1]들을 먼저 백트래킹 한 다음 tmp[0]이 다음숫자로 백트래킹 되어
        // 이어나가면서 다시 DFS()가 작동을하여 tmp[1]을 백트래킹 한다.
        // 이를 반복시 경우의 수가 모두 출력된다.
        for (let i = 1; i <= n; i++) {
          tmp[L] = i; 
          DFS(L + 1);
        }
      }
    };
    DFS(0, 0);

    return answer;
  };
  console.log(solution5(3, 2));

  return <div></div>;
};

export default Sol3;
