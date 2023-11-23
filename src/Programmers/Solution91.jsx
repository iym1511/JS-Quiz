// 공원 산책 (개인적으로 너무 어렵다..)
const Solution91 = () => {

  // function solution(park, routes) {
  //   let answer = [0,0];

  //   for (let i = 0; i < park.length; i++) {

  //       if(routes[i][0] == "E" && routes[i+1][0] != "X"){
  //         if(answer[0]+Number(routes[i][2]) < park[i].length){
  //           answer[0] += answer[0]+Number(routes[i][2]);
  //         }
  //       }
  //       else if(routes[i][0] == "S" && routes[i+1][0] != "X"){
  //         if(answer[1]+Number(routes[i][2]) < park[i].length){
  //           answer[1] += answer[1]+Number(routes[i][2]);
  //         }
  //       }
  //       else if(routes[i][0] == "W"){
          
  //       }

  //   }

  //   return answer;
  // }

  const park = ["SOO", "OXX", "OOO"];
  const routes = ["E 2", "S 2", "W 1"];


  const solution = (park, routes) => {
    const maxRow = park.length, maxCol = park[0].length
    const Routes = routes.map(route=>{
        const [op,n] = route.split(' ')
        // 구조분해 할당을 했기 때문에 애초에 op : E 상태이다
        return {op,n:Number(n)}
    })

    // 'S' 가 존재하는 열 값, 행 값 저장
    let sRowIdx;  // 열(세로)
    let sColIdx;  // 행(가로)

    for(let rowIdx=0; rowIdx<park.length; rowIdx++){
      // park 문자열에 몇번째 행 index에 S가 있는지
        const sIndex = park[rowIdx].indexOf('S');
      // 'S' 가 존재할 시  열에 rowIdx 값저장, 행에 sIndex값 저장
        if(sIndex > -1){
            sRowIdx = Number(rowIdx) // 0
            sColIdx = Number(sIndex) // 0
            break
        }
    }

    // 이동 위치와 이동 횟수 배열화
    // 전체 for문 해당 로직
    // 1. for문에 +1 을 해주는 이유는 현재 위치보다 다음 index위치의 문자열을 확인하기 위함
    // 2. +n : +2만큼 이동해야 하기때문에 n만큼 for문 순회하기 위함
    
    Routes.forEach(({op,n})=>{
      // 우측 이동
        if(op === 'E'){
          // 최대 이동거리가 범위 내 라면 실행
          // 0 + 2 < 3
            if(sColIdx + n < maxCol){
                let isX = false
                // 1; i<3
                for(let i=sColIdx+1; i<sColIdx+1+n; i++){
                  if(park[sRowIdx][i] === 'X'){ // 두번째 행이 X일때 isX = true
                      isX = true
                      break
                  }
                }
                if(!isX){ // isX 가 false 그대로 일 때 (위 for문 실행x)
                    sColIdx += n // 0 + 2
                }
            }
        }
        // 좌측 이동
        else if(op === 'W'){
          // 최소길이가 0 이니까 그 보다 낮으면 실행 x
          // 2 - 1 >= 0 
            if(sColIdx - n >= 0){
                let isX = false
                // 1; 1 > 0;
                for(let i=sColIdx-1; i>sColIdx-1-n; i--){
                  if(park[sRowIdx][i] === 'X'){ // park[0][1] 이 'X'가 아님
                      isX = true
                      break
                  }
                }
                if(!isX){ // 'X'가 존재하지 않기 때문에 좌측으로 1칸 이동
                    sColIdx -= n // 2 - 1
                }
            }
        }
        // 하단 이동
        else if(op === 'S'){
          // 0 + 2 < 3
            if(sRowIdx + n < maxRow){
                let isX = false
                // 1; 1 < 3
                for(let i=sRowIdx+1; i<sRowIdx+1+n; i++){
                    if(park[i][sColIdx] === 'X'){ // park[1][1] === 'X'이기 때문에 실행x for문 종료
                        isX = true
                        break
                    }
                }
                if(!isX){
                    sRowIdx += n
                }
            }
        }
        // 상단 이동
        else if(op === 'N'){
            if(sRowIdx - n >= 0){
                let isX = false
                for(let i=sRowIdx-1; i>sRowIdx-1-n;i--){
                    if(park[i][sColIdx] === 'X'){
                        isX = true
                        break
                    }
                }
                if(!isX){
                    sRowIdx -= n
                }
            }
        }

    })

    const answer = [sRowIdx,sColIdx]
    return answer
  }

  console.log(solution(park, routes));

  return <div></div>;
};

export default Solution91;
