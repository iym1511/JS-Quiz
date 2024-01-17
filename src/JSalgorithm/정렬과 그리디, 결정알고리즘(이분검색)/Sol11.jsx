import { useState } from "react";

const Sol11 = () => {

  const [asd, setAsd] = useState([
    {
      id: 1,
      name: "1번",
    },
    {
      id: 2,
      name: "2번",
    },
    {
      id: 3,
      name: "3번",
    },
  ]);

  // const solution = () => {
  //   let answer;
  //   // const a = asd.find((data) => data)
  //   const ddd = asd.find((a) => a.id === 3);
  //   ddd.name = "asd"
  //   console.log(asd)
  //   // setAsd((prev) => prev.map((a) =>console.log({...a})))
  //   // return answer;
  // }

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const solution = (m, arr) => {
    let answer;
    let lt = Math.max(...arr);
    let rt = arr.reduce((sum, a) => sum + a,0);
    while (lt <= rt) {
      let mid = Math.floor((lt + rt) / 2);
      console.log(`lt=${lt}, rt=${rt}, mid=${mid}`);
      let cnt = 1; // DVD 한장 존재
      let sum = 0;

      // 배열이 끝나고 cnt의 수가 필요한 장 이다.
      for (let x of arr) {
        // 28 > 27
        if (sum + x > mid) {
          cnt++; // cnt = 2;
          sum = x; // sum=7(7) 여기서 sum이 7이되니 다시 else로
        } else sum += x; // 1(1),3(2),6(3),10(4),15(5),21(6), 15(8), 24(9)
      }

      // 2 <= 3
      if (cnt <= m) {
        answer = mid;  // answer = 27;
        rt = mid - 1;  // rt = 26
      } else lt = mid + 1;

    }
    return answer;
  };

  console.log(solution(3, arr));

  return (
    <div onClick={solution}>
      <button>gd</button>
    </div>
  );
};

export default Sol11;
