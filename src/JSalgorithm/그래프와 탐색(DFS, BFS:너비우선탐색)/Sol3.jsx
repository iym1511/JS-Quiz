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

  const solution6 = (arr, money) => {
    // 기본값이 0 인데 최소값 구할때 사용
    // (0으로 비교하면 처음값부터 무조건 0이 작기때문에 비교가안됨)
    let answer = Number.MAX_SAFE_INTEGER;
    let len = arr.length;

    // L은 카운트 용도
    const DFS = (L, sum) => {
      if (sum > money) return; // 15원보다 크면 return
      if (L > answer) return; // 최소로 구해야하니까 더 크면 return
      if (sum === money) {
        answer = Math.min(answer, L);
      } else {
        for (let i = 0; i < len; i++) {
          DFS(L + 1, sum + arr[i]);
        }
      }
    };
    DFS(0, 0);

    return answer;
  };
  console.log(solution6([1, 2, 5], 15));

  const solution7 = (arr, m) => {
    let answer = [];
    let len = arr.length;
    let tmp = Array.from({ length: m }, () => 0);
    // 두번째 올 순열의 중복을 방지해줌
    let ch = Array.from({ length: len }, () => 0);

    const DFS = (L) => {
      if (L === m) {
        answer.push(tmp.slice());
      } else {
        for (let i = 0; i < len; i++) {
          if (ch[i] === 0) {
            ch[i] = 1;
            tmp[L] = arr[i];
            DFS(L + 1);
            ch[i] = 0;
          }
        }
      }
    };
    DFS(0, 0);

    return answer;
  };
  console.log(solution7([3, 6, 9], 2));

  const solution8 = (num) => {
    let answer;
    const DFS = (n) => {
      if (n === 1) return 1;
      else return answer = n * DFS(n - 1);
    };
    answer = DFS(num);

    return answer;
  };
  console.log(solution8(5));

  const solution9 = (n, r) => {
    let answer;
    let dy = Array.from(Array(7), ()=>Array(7).fill(0));
    console.log(dy)
    const DFS = (n,r) => {
      if(dy[n][r] > 0){
        console.log("0이 1된거",n,r)
        return dy[n][r];
      } 
      if(n === r || r === 0) return 1;
      else {
        console.log(DFS(n-1,r-1),DFS(n-1,r));
        return dy[n][r] = DFS(n-1, r-1)+DFS(n-1,r); 
        // dy[5][3] = 4,2(6가지 경우의 수) 
        // dy[4][2] = 3,1(3가지 경우의 수)
        // dy[3][1] = 2,0(return 1)
        // 백트래킹) dy[3][1] = 2,0(return 1) + 2,1(2가지 경우의 수)  = 3
        // 백트래킹) dy[2][1] = 1,0(return 1) 
        // 백트래킹) dy[2][1] = 1.0(return 1) + 1,1(1가지 경우의 수) = 2
        // 백트래킹) dy[4][2] = 3,1(3가지 경우의 수) + 3,2(3가지 경우의 수) = 6
        // dy[3][2] = 2,1(2가지 경우의 수) + 2,2(1가지 경우의 수) = 3
        // 나머지 해봤던거라 if문에서 걸림
        // 백트래킹) dy[5][3] = 4,2(6가지 경우의 수) + 4,3(4가지 경우의 수) = 10
        // dy[4][3] = 3,2(3가지 경우의 수) + 3,3(return 1) = 4
        
      } 
    }
    answer = DFS(n,r)

    return answer;
  }
  console.log(solution9(5,3))

  return <div></div>;
};

export default Sol3;
