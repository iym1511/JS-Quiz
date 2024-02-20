// 이진트리 너비우선탐색(BFS)

const Sol1 = () => {

  const solution = () => {
    let answer = "";
    let queue=[];
    queue.push(1);

    // queue가 0이되면 종료
    while(queue.length){
      let v=queue.shift();
      answer+= v+" ";

      for(let nv of [v*2, v*2+1]){
        // console.log(answer)
        if(nv>7) continue;
        console.log(nv)
        queue.push(nv)
      }
    }

    return answer
  }

  console.log(solution())

  return ( 
    <div>

    </div>
  );
}

export default Sol1;