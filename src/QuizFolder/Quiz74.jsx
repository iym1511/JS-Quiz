const Quiz74 = () => {
  const graph = {
    1: [2, 3, 4],
    2: [1, 3, 4, 5, 6],
    3: [1, 2, 7],
    4: [1, 2, 5, 6],
    5: [2, 4, 6, 7],
    6: [2, 4, 5, 7],
    7: [3, 5, 6],
  };

  const user_input = prompt("입력해주세요").split(" ");
  const start = parseInt(user_input[0], 10); // 1
  const end = parseInt(user_input[1], 10);  // 7

  let queue = [start]; // [1]
  let visited = []; // 3. [2]

  function sol(n, visited) {
    // 1. 1
    let node = n[n.length - 1];
    let length = 0;

    if (node == end) {
      return visited.length;
    }

    if (visited.includes(node)) {
      return visited.length;
    } else {
      // 2. visited에 1 push
      visited.push(node);
    }

    let max = [];

    for (let next_node in graph[node]) {
    console.log(graph[node][next_node])
      // 4. n에 2,3,4 push
      n.push(graph[node][next_node]);
      
      // console.log(n)
      max.push(length, sol(n, visited));
      length = Math.max.apply(null, max);

      queue.pop();
    }
    return length;
  }

  console.log(sol(queue, visited));

  return <div></div>;
};

export default Quiz74;

        //         1
        // 4       2         3         
        //     5       6         7