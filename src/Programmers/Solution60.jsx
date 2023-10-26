// 행렬의 덧셈
const Solution60 = () => {

  let arr1 = [[1,2],[2,3]];	
  let arr2 = [[3,4],[5,6]];

  function solution(arr1, arr2) {
    let answer = [];
    for(let i = 0; i<arr1.length; i++){
      answer[i] = []; // 빈 배열 추가
      console.log(answer)
      for(let j = 0; j<arr2[i].length; j++){
        answer[i].push(arr1[i][j] + arr2[i][j])
      }
    }

    return answer;
  }

  console.log(solution(arr1,arr2));

  return (  
    <div>

    </div>
  );
}

export default Solution60;