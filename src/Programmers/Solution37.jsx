// 음양 더하기

const Solution37 = () => {

  let absolutes = [4, 7, 12];
  let signs = [true, false, true];

  function solution(absolutes, signs) {
    var answer = 0;

    for(let i = 0; i<absolutes.length; i++){
      if(signs[i]){
        answer += absolutes[i];
      }else{
        answer -= absolutes[i];
      }
    }

    return answer;
  }

  console.log(solution(absolutes, signs));

  return <div></div>;
};

export default Solution37;
