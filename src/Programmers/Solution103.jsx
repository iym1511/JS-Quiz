// 짝지어 제거하기
const Solution103 = () => {


  // 49점짜리 내코드
  // const solution = (s) => {
  //   let answer = 1;

  //   let word = "";
  //   for(let i = 0; i< s.length; i++){
  //     if(s[i] == s[i+1]){
  //       word += s.slice(0,i)
  //       word += s.slice(i+2,s.length)
  //       break;
  //     }
  //   }

  //   if(word == ""){
  //     return 0
  //   }else{
  //     return answer
  //   }

  // }

  // 풀이 참고
  // 다음 정수가 연속되면 pop() 을 해주어 계속 연속된다면 배열에 남아있는것이 없어
  // 참이기 때문에 0을 반환

  const s = "baabaa";

  function solution(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
      if (stack[stack.length - 1] === s[i]) {
        stack.pop(); // 3. [b] 4. [] 6. []
      } else {
        stack.push(s[i]); // 1. [b] 2. [b,a]  5. [a]
      }
    }

    return stack.length === 0 ? 1 : 0;
  }

  console.log(solution(s));

  return <div></div>;
};

export default Solution103;
