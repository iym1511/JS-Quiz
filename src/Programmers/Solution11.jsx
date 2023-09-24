// 수열과 구간 쿼리 3
const Solution11 = () => {

  const arr = [0, 1, 2, 3, 4];
  const queries = [[0, 3],[1, 2],[1, 4]];

  // queries 를 forEach로 풀어준 뒤 0, 3 index의 값을 3, 0 인덱스의 값으로 교체
  // 서로 상반되는 인덱스위치의 값을 바꿔줌으로 써 완성
  const solution = (arr, queries) => {
    queries.forEach(([a, b])=>{
      [arr[a],arr[b]] = [arr[b],arr[a]];
    })
    return arr;
  };

  console.log(solution(arr, queries));

  return (  
    <div>

    </div>
  );
}
 
export default Solution11;