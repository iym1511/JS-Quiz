// 수열과 구간 쿼리4
const Solution13 = () => {

  let arr = [0, 1, 2, 4, 3];
  let queries = [[0, 4, 1],[0, 3, 2],[0, 3, 3]];

  const solution = (arr, queries) => {

    queries.map(([s, e, k]) => {
      for(let i = s; i<e; i++){
        if(i % k === 0){
          console.log(arr[i]+1)
          arr[i] = arr[i]+1
          // arr[i]++
        }
      }
    });
    return arr
  }

  console.log(solution(arr, queries));

  return (  
    <div>

    </div>
  );
}

export default Solution13;