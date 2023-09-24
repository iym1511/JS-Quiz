// 수열과 구간 쿼리2
const Solution12 = () => {
  const arr = [0, 1, 2, 4, 3];
  const queries = [
    [0, 4, 2],
    [0, 3, 2],
    [0, 2, 2],
  ];

  const solution = (arr, queries) => {
    return queries.map(([s, e, k]) => {
      let result = -1;
      for(let i = s; i <= e; i++){
        const v = arr[i]
        if(v <= k) continue;
        
        result = result === -1 ? v : Math.min(result, v);
      }
      return result;
    })
  };

  console.log(solution(arr, queries));

  //  또는
  // function solution(arr, queries) {
  //     return queries.map(([s, e, k]) => arr.slice(s, e + 1).filter((n) => n > k).sort((a, b) => a - b)[0] || -1);
  // }
  // solution(arr, queries)

  return <div></div>;
};

export default Solution12;
