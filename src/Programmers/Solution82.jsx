// 바탕화면 정리

const Solution82 = () => {
  // let wallpaper = [".#...", "..#..", "...#."];
  // let wallpaper = ["..........", ".....#....", "......##..", "...##.....", "....#....."];
  let wallpaper = [".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."];
  // let wallpaper = ["..", "#."];

  // 🥲 51점짜리 내코드
  // 1차 배열의 index저장 2차 배열의 index 저장
  // function solution(wallpaper) {
  //   let answer;
  //   let bigNum = 0;

  //   let smallNum;

  //   let rowTop;
  //   let colBottom;

  //   // 가로행row  세로열col
  //   // index1 이 문제
  //   wallpaper.forEach((a,index1) => {
  //     a.split("").forEach((b,index2)=>{
  //       if(b == "#" && rowTop == undefined){
  //         rowTop = index1
  //       }
  //       if(colBottom == undefined && wallpaper.length-1 == index2){
  //         colBottom = index2+1
  //       }
  //       if(b == "#" && bigNum < index2){
  //         bigNum = index2;
  //       }
  //       if(b == "#" && smallNum == undefined){
  //         smallNum = index2;
  //       }
  //       if(b == "#" && smallNum > index2){
  //         smallNum = index2;
  //       }
  //     })
  //   })

  //   answer = [rowTop,smallNum,colBottom,bigNum+1];

  //   return answer;
  // }

  function solution(wallpaper) {
    const x = [];
    const y = [];
    const n = wallpaper.length; // 세로 길이
    const m = wallpaper[0].length; // 가로 길이

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (wallpaper[i][j] === "#") {
          // 한 줄에 존재하는 #의 index를 저장함
          // 세로 index값도 저장한다.
          x.push(i);
          y.push(j);
        }
      }
    }

    // Math.min에 배열을 넣을떈 ... 사용
    const xMin = Math.min(...x);
    const yMin = Math.min(...y);
    const xMax = Math.max(...x);
    const yMax = Math.max(...y);

    return [xMin, yMin, xMax + 1, yMax + 1];
  }

  console.log(solution(wallpaper));

  return <div></div>;
};

export default Solution82;
