// 최대점수 구하기(이진트리DFS)
import { useState } from "react";

const Sol7 = () => {
  const [tr, setTr] = useState([
    {
      id: 1,
      name: "he",
    },
    {
      id: 2,
      name: "she",
    },
  ]);

  const onClickHandler = (num) => {
    setTr((prev) =>
      prev.map((data, idx) =>
        data.id === num ? { ...data, name: "SEC" } : { ...data }
      )
    );
  };

  console.log(tr);

  const pv = [10, 25, 15, 6, 7];
  const pt = [5, 12, 8, 3, 4];

  const solution = (m, pv, pt) => {
    let answer = 0;
    let n = pv.length;

    const DFS = (L, sum, time) => {
      if (time > m) return;

      if (L === n) {
        answer = Math.max(sum, answer);
      } else {
        DFS(L + 1, sum + pv[L], time + pt[L]);
        DFS(L + 1, sum, time);
      }
    };

    DFS(0, 0, 0);

    return answer;
  };

  console.log(solution(20, pv, pt));

  return (
    <div>
      <button onClick={() => onClickHandler(1)}>버튼</button>
    </div>
  );
};

export default Sol7;
