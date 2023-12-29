// 멘토링
// 문제 푸는방식
// 각각 배열에서 index가 순위이고 정수가 학생이다
// 그렇다면 각각의 배열에서 항상 멘토와 멘티가 되는 학생을 찾으시오
// 정답 은 [3,1, 3,2, 4,2] 이다. 모든 배열에서 이 세 짝궁은
// 항상 성적이 왼쪽이 더 높고 오른쪽이 낮기 때문에 총 짝은 3명이다.

// 결론
// 1. i와j는 학생을 가리키는 정수이다.
// 2. k는 배열 위치를 이동시켜주는 역할이고
//    s는 학생의 순위를 알려준다.
// 3. 학생3과 학생1은 모든배열에서 항상 학생3이 성적이 높다.
// 4. 학생3과 학생2는 모든배열에서 항상 학생3이 성적이 높다.
// 5. 학생4와 학생2는 모든배열에서 항상 학생4가 성적이 높다.

// < i와 j가 순회하는 학생(정수) >
// 1,1 / 1,2 / 1,3 / 1,4
// 2,1 / 2,2 / 2,3 / 2,4
// 3,1 / 3,2 / 3,3 / 3,4
// 4,1 / 4,2 / 4,3 / 4,4

const Sol3 = () => {


  const arr = [[3,4,1,2], [4,3,2,1], [3,1,4,2]]

  const solution = (arr) => {
    let answer = 0;
    let m = arr.length;
    let n = arr[0].length;

    for(let i = 1; i<=n; i++){
      for(let j = 1; j<=n; j++){
        let cnt = 0;
        for(let k = 0; k<m; k++){
          let pi = 0;
          let pj = 0;
          for(let s = 0; s<n; s++){
            if(arr[k][s] === i) pi=s;
            if(arr[k][s] === j) pj=s;
          }
          // 더 작은쪽이 순위가 높기때문에 pj가 커야 cnt 증가
          if(pi < pj) cnt++;
        }
        // 배열 3곳에서 다 왼쪽이 성적이 좋아야 하기때문에 +3 이 되어야 answer++
        if(cnt === m) answer++;

      }
    }

    return answer;
  }

  console.log(solution(arr));

  return (  
    <div>

    </div>
  );
}
 
export default Sol3;