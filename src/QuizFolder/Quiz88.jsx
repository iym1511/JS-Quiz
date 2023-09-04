const Quiz88 = () => {

      const makeMap = (n, m, char, obj) => {
        //지도 초기화하기
      let world_map = [];
      //각 지도 가로/세로 두칸 외벽을 포함한 크기만큼 추가하기(각 끝 한칸씩)
      for(let i = 0; i< m+2; i++){
        world_map.push(Array(n+2).fill(0)); // 4+2만큼 배열를 5+2번 push (💡 Array가 6만큼의 빈배열을 만들어주고 그 안을 0으로 채워줌)
      }

      // 지도 외벽 그리기
      // (💡 world_map큰 배열만 순회함 world_map[0]첫번쨰 배열을 순회한다)
      for(let i in world_map){
        for(let j in world_map[0]){
          // i==0 첫번째줄 2로 다채움, 배열마다 마지막꺼 채움, j==0 배열마다 첫번째줄 채움, 마지막줄 배열 2로 다 채움
          if (i==0 || j==world_map[0].length-1 || j==0 || i==world_map.length-1) {
            world_map[i][j] = 2;
          }
        }
      }


      //지도에 캐릭터 추가하기/ 외벽으로 인해 좌표에 +1을 해줍니다.
      world_map[char[0]+1][char[1]+1] = 1;

      //지도에 장애물 추가하기
      for (let i of obj){
        // 조건이 맞을때 벽제외하고 장애물 추가
        if (world_map[i[0]+1][i[1]+1] != 1){
          world_map[i[0]+1][i[1]+1] = 2;
        } else {
          world_map[i[0]+1][i[1]+1] = 1;
        }
      }
    

    //장애물을 추가하려는 자리에 캐릭터가 있을 시 캐릭터는 그대로둔다
    // 마찬가지 외벽으로 인한 좌표 조정을 해준다.
    for(let i of world_map) {
      console.log(i)
      }
      return world_map;
  }

  // 캐릭터 움직이게 하기
  function move(world_map, moving){
    let x = 0;
    let y = 0;
  
    // 1. 캐릭터 좌표 찾기
    for(let i of world_map){
      if(i.includes(1)){
        x = world_map.indexOf(i); // 캐릭터의 세로 좌표
        y = i.indexOf(1); // 캐릭터의 가로 좌표
      }
    }
  
    // 2. 원래 위치에있던 캐릭터1을 0으로 초기화
    world_map[y][x] = 0;
  
    for(let i of moving){
      console.log(i)
      if (i == 1 && world_map[y-1][x]!=2){
        y -= 1;
      } else if (i==2 && world_map[y+1][x]!=2){ // 3. world_map[1+1][1] (2가 끝날때 까지 아래로 움직임)
        y += 1;
      } else if (i==3 && world_map[y][x-1]!=2){
        x -= 1;
      } else if (i==4 && world_map[y][x+1]!=2){ // 4. 4가 끝날떄까지 오른쪽으로 움직임
        x += 1;
      }
    }
  
    // 5. 최종 y,x 를 캐릭터화 시켜서 표시해줌
    world_map[y][x] = 1;
  
    for (let i of world_map){
      console.log(i);
    }
    return [x,y];
  }

  console.log('캐릭터 이동 전 지도');
  const world_map = makeMap(4, 5, [0, 0], [[0,1],[1,1],[2,3],[1,3]]);

  const moving = [2,2,2,4,4,4];
  console.log('캐릭터 이동 후 지도');
  console.log('캐릭터위치 :',move(world_map, moving));

  return (  
    <div>

    </div>
  );
}

export default Quiz88;