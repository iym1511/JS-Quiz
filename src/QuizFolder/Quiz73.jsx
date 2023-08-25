const Quiz73 = () => {
  const graph = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"],
  };

  const user_input = prompt("입력해주세요").split(" ");
  const start = user_input[0]; // A
  const end = user_input[1];  // F

  let queue = [start]; // 6. B C // 10. 반환되서 C // 13. C D E // 17. 반환 후 D E // 20. D E F
  let visited = [start]; // 6. A B C // 13. A B C D E // 20. A B C D E F

  function solution() {
    let count = -1;
    
    while (queue.length !== 0) {
      // ❤️ for문을 돌떄마다 실행되는것이 아닌 queue의 길이가 바뀔때마다 실행되서 총 count는 2 ❤️
      count += 1; // 1. count = 0 // 7. count = 1 // 14. count = 2

      
      let size = queue.length

      // 2. 2중 for문 1번 반복(0) // 8. 2번 반복(1) // 15. 3번 반복(2)
      for (let i = 0; i < size; i++) {
        // 3. A 반환 // 9. B반환 // 16. C반환
        let node = queue.splice(0, 1);
        console.log(queue)
        console.log(count)
        if (node == end) {
          return count;
        }
        
        for (let next_node in graph[node]) {
          // 4. B C 가 visited에 없으면 실행 // 11. A D E 중 D E만 실행 // 19. A F 중 F만 실행
          if (!visited.includes(graph[node][next_node])) {
            // 5. B C 각 변수에 푸쉬  // 12. D E 푸쉬 // 19. F 푸쉬
            visited.push(graph[node][next_node]);
            queue.push(graph[node][next_node]);
            // console.log(visited)
          }
        }
      }
    }
  }
  console.log(solution());
  return <div></div>;
};

export default Quiz73;

//       A
//   B       C
// D   E   F
