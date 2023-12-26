// 문자거리 (시간복잡도)

const Sol4 = () => {
  let str = "teachermode";
  let str2 = "e";

  const solution = (a, b) => {
    let answer = [];
    let count = 0;

    // 첫번째로 정방향일때 e와의 거리를 계산
    for (let x of a) {
      if(x === b){
        count=0;
        answer.push(count)
      }else{
        count++;
        answer.push(count);
      }
    }

    // count 초기화
    count = 0;

    // 두번째로 역방향일때 e와의 거리를 계산
    for(let i=a.length-1; i >= 0; i--){
      if(a[i] === b){
        count = 0;
      }else{
        count++;
        answer[i] = Math.min(answer[i], count);
      }
      

    }


    return answer;
  };

  console.log(solution(str, str2));

  return <div></div>;
};

export default Sol4;
