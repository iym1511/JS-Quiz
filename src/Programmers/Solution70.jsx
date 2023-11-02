// 숫자 짝꿍
const Solution70 = () => {
  

  // 쓰래기같은 내 코드
  // const solution = (x, y) => {
  //   let answer = "";
  //   for(let i = 0; i < x.length; i++){
  //     for(let j = 0; j < y.length; j++){
  //       if(x[i] == y[j]){
  //         if(!answer.includes("0")){
  //           answer += y[j];
  //         }
  //         y = y.slice(0, j) + y.slice(j + 1)
  //       }
  //     }
  //   }

  //   if(answer == ""){
  //     return answer += -1;
  //   }
  //   return answer.split("").sort((a,b) => b-a).join("");
  // }

  // console.log(solution(x, y));

  const X = "5525";
  const Y = "1255";

  function solution(X, Y) {
    let answer = "";
    const arrX = X.split("");
    const arrY = Y.split("");
    const yObj = {};

    arrX.sort((a, b) => b - a);

    arrY.forEach((y) => {
      // 처음 객체에 아무것도 없기때문에 각각 1씩 들어감
      if (yObj[y] === undefined) {
        yObj[y] = 1;
      }
      // 같은 수 가 한번 더 나왔을때 해당key의 value에 +1
      else yObj[y]++;
    });

    arrX.forEach((x) => {
      // y에 있는 수 만큼 value를 +했다가 x에 있는 수 만큼 value를 -하면
      // 교집합 되는 결과가 나오지 않기 때문에 0이하로 감소x

      // ex) X가 5가 3 개고 Y가  5가 2개니까 { 5 : 2 } 인데 0이하 감소를 막지않으면
      // {5 : -1}이 되어 서로 일치하는 5의 개수가 초과되버림

      if (yObj[x] !== undefined && yObj[x] !== 0) {
        // y값 중에 key값이 x와 같은것이 있으면 그 자리의 value를 -1 해준다
        yObj[x]--;
        answer = answer.concat(x);
      }
    });

    if (answer.length === 0) return "-1";
    if (answer[0] === "0") return "0";
    return answer;
  }
  
  console.log(solution(X, Y))

  return <div></div>;
};

export default Solution70;
