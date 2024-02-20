// 송아지 찾기(BFS)

const Sol2 = () => {

  const solution = (S, E) => {
    let answer =0;
    let ch = Array.from({length: 101}, ()=>0); // nx 가 1이되면서 중복방지해주는 확인용 배열
    let dis = Array.from({length: 101}, ()=>0);
    let queue = [];
    ch[S]=1;
    queue.push(S);
    dis[S] = 0;

    while(queue.length){
      let x = queue.shift();
      // console.log(x,queue)
    for(let nx of [x-1, x+1, x+5]){ // 1.!5! 4(3=1) 6(5=1) 8(7=1) / 2.!4! 3(2=1) 4(3=2) 8(7=2) / 3.!6! 5(4=1) x 10(9=1)
      if(nx === E) return dis[x]+1; // dis[x] : 이지점까지 오는 점프횟수
      if(nx > 0 && nx <=100 && ch[nx]===0){
        ch[nx]=1; // queue 중복방지
        queue.push(nx);
        dis[nx]=dis[x]+1 // 현재 지점 x에서 다음 지점 nx로 이동할 때 점프 횟수를 1회 추가
        console.log(dis)
      }
    }

  }

    return answer;
  }

  console.log(solution(5,14))

  return ( 
    <div>

    </div>
   );
}
 
export default Sol2;