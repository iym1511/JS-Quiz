import { useEffect } from "react";

const Quiz71 = () => {
  // 데이터
  const graph = {
    'A': ['E', 'B', 'C'],
    'B': ['A'],
    'C': ['A'],
    'D': ['E','F'],
    'E': ['A', 'D'],
    'F': ['D'],
  };

  function dfs(graph, start) {

    let visited = [];
    // 처음값 E // 4. [D,A]
    let stack = [start];

    while (stack.length !== 0) {
      // 5. A 를 꺼냄
      let n = stack.pop(); // pop : 배열에서 마지막 요소를 제거하고 그 요소 반환
      if (!visited.includes(n)) {
        // 1. E push, // 6. A 푸쉬
        visited.push(n);
        // 2. E : [D,A] 에서 D A가 없는문자 필터
        let sub = graph[n].filter((x) => !visited.includes(x));
        for (let i of sub) {
          // 3. D,A 푸시
          stack.push(i);
          
        }
      }
    }
    return visited;
  }

  // 6번까지 반복해서 결과 E A B C D F
  // 하지만 E D F A C D 로 나와야함
  console.log(dfs(graph, "E"));

  return <>
  </>;
};

export default Quiz71;
