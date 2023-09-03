const Quiz85 = () => {
  // const point = prompt('초밥 점수를 입력하시오.').split('');
  // const dish =
  // const point = [1,1,3,2,5];
  // const dish = 3;

  // const solution = (point,dish) => {

  //   let points = point.slice();
  //   let arrays = [];
  //   let count = 0;

  //     for(let j of points){
  //       if(j < dish){
  //         arrays.push(j);
  //         points.slice(j);
  //         console.log(arrays);
  //       }
  //       count += 1;
  //       console.log(count);
  //     }
  //   return count
  // }

  // console.log(solution(point,dish))


  // point 각 접시별 점수가 들어있는 배열
  // dish 먹고자하는 접시의 위치
  function solution(point, dish) {
    // 배열 순서는 0부터 시작, 입력은 1부터 시작이기 때문에 -1 해준다.
    dish -= 1;
    let answer = 0;
    //오름차순으로 정렬
    let s = point.slice();
    s.sort((a, b) => {
      return a - b; // 1,1,2,3,5
    });
    console.log("s", s);

    while (true) {
      // point 제일 앞의 점수를 추출하여  p에 넣는다. 즉, 앞에 도착한 접시의 점수!
      // shift와 push를 활용해 회전하도록 구현할 예정 !
      let p = point.shift(); // 1. 1 // 6. 1 // 11. 3
      console.log(p)
      // 현재 s[0]은 point 배열에서 가장 작은 값을 가지고 있음!
      // 현재 가장 낮은 점수를 가지고 있는 접시가 앞에 도착했다면 먹도록 할것!
      // 2. 1 === 1 // 7. 1 === 1 // 12. 2 === 3 false
      if (s[0] === p) {
        //앞에 도착한 접시가 선택한 접시라면 먹고 반복문 종료
        if (dish === 0) {
          break;
        }
        // 선택한 접시 움직임.
        // 3. 2 - 1 = 1 // 8. 1 - 1 = 0
        dish -= 1;
        //한 접시를 먹었음으로 하나 줄어듬
        // 4. ['1','2','3','5'] 남음 // 9. ['2','3','5']
        s.shift();
      } else {
        // 접시 위 초밥을 먹을 수 있는 조건이 충족되지 않아 그대로 둔다
        // shift 했던 것을 다시 push.
        // 13. 3 Push ['2','5','3']
        point.push(p);
        // 접시의 움직임 만약 선택한 접시가 앞에 도착했다면 맨 뒤로 보내고,
        // 그렇지 않다면 한 칸 당긴다.
        if (dish === 0) {
          // 14. 3 - 1 = 2
          dish = point.length - 1;
        } else {
          dish = dish - 1;
        }
        // 반복 한번당 접시 한번 지나감을 나타냄.
      }
      // 5. answer = 1 // 10. answer = 2 // 15. answer = 3
      answer += 1;
    }
    return answer;
  }

  const point = prompt("점수를 입력해주세요.").split(" "); // 1,1,3,2,5
  const dish = parseInt(prompt("몇번째 입니까?"), 10); // 3

  console.log(solution(point, dish));

  return <div></div>;
};

export default Quiz85;
