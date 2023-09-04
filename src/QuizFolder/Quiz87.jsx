import { useState } from "react";

const Quiz87 = () => {

    const [list, setList] = useState([]);
    const [text, setText] = useState({
      id : '',
      re : ''
    });

    const textHandler = (e) => {
      const { name, value } = e.target;
      setText((prev) => ({...prev, [name] : value}));

    }

    const testFc = () => {
      setList((prev) => [...prev, text])
    }

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
    //마찬가지 외벽으로 인한 좌표 조정을 해준다.
    for(let i of world_map) {
      console.log(i);
    }

  }

    //     가로,세로,[캐릭위치],[[장],[애],[물]]
    console.log(makeMap(4, 5, [0, 0], [[0,1],[1,1],[2,3],[1,3]]));

  return (  
    <div>
      {list.map((a,i)=>(
        <div key={i}>
          <p>{a.id}</p>
          <p>{a.re}</p>
        </div>
      ))}
      <input type="text" value={text.id} name="id" onChange={textHandler}/>
      <input type="text" value={text.re} name="re" onChange={textHandler}/>
      <button onClick={testFc}>테스트 클릭</button>
    </div>
  );
}

export default Quiz87;