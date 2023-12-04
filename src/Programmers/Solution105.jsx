// 영어 끝말잇기
const Solution105 = () => {

  // function solution(n, words) {
  //   let answer = [];
  //   let obj = {};
  //   let count = 1;
  //   for(let i = 1; i<=n; i++){
  //     obj[i] = []
  //   }

  //   for(let i = 0; i<words.length; i++){
  //     if(count <= n){
  //       obj[count].push(words[i])
  //       count++;
  //     }
  //     if(count > n){
  //       count = 1;
  //     }
  //   }

  //   for(let key in obj){
  //     for(let i = 0; i< obj[key].length; i++){
  //       // console.log(obj[key][i][obj[key][i].length-1])
  //       if(obj[key][i][obj[key][i].length-1] !== obj[key][i+1][0]){
  //         console.log(key,i)
  //       }
  //     }
  //   }

  //   return answer
  // }

  const n = 3;
  const words = ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"];
  // const words = ["hello", "one", "even", "never", "now", "world", "draw"];
  function solution(n, words) {
    let idx;
    for (let i = 0; i < words.length; i++) {
      // 끝말잇기 틀린 경우 (index가 0이아니고 현재 첫번째 단어와 이전의 마지막 단어가 같지않을시)
      if (i !== 0 && words[i][0] !== words[i - 1][words[i - 1].length - 1]) {
        idx = i + 1; // index는 0부터 시작하니 +1 로 틀린값 위치 찾음
        // 5 % n = 1, 2.5 = 3
        return [idx % n === 0 ? n : idx % n, Math.ceil(idx / n)];
      }
      
      // 중복 단어 말한 경우
      // 0 / 1,0 / 2,1,0 과 같은식으로 words[i]수를 words[j]들로 한바퀴씩 검사해본다.
      for (let j = i - 1; j >= 0; j--) {
        if (words[i] === words[j]) {
          idx = i + 1;
          return [idx % n === 0 ? n : idx % n, Math.ceil(idx / n)];
        }
      }


    }
    return [0, 0];
  }

  console.log(solution(n, words));

  return (  
    <div>

    </div>
  );
}

export default Solution105;