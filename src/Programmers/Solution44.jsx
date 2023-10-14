// 푸드 파이터 대회
const Solution44 = () => {
  // 1번 음식 7개니까 6개만되서 1 6개
  // 2번음식은 1개가 안되서 없음
  // 3번 음식은 2개라서 3번 두개

  const food = [1, 3, 4, 6];

  // function solution(food) {
  //   let answer = "";
  //   let saveNum = 0;
  //   const water = food[0] = 0

  //   for (let i = 1; i < food.length; i++) {
  //     let saveIndex = food[i];

  //     for (let j = 0; j < saveIndex; j++) {
  //       if (food[i] % 2 === 0) {
  //         answer += i;
  //         if(answer[answer.length - 1] != saveNum){
  //           let result = answer.split("").slice(answer.length / 2).join("")
  //           return result + water + answer.split("").slice(answer.length / 2).reverse().join("");
  //         }
  //       }else{
  //         food[i] = food[i] - 1;
  //       }
  //       saveNum = i
  //     }
  //   }


  //   return answer;
  // }
  

function solution(food) {
    let temp =[];
    for(let i=1;i<food.length;i++){
        let num = Math.floor(food[i]/2)
        if(food[i]!==1){
            temp.push(`${i}`.repeat(num));
        }
    }
    let str1=temp.join('')
    let str2=temp.reverse().join('')
    return str1+'0'+str2;
}

  console.log(solution(food));

  return <div></div>;
};

export default Solution44;
