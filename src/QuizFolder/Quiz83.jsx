const Quiz83 = () => {

  // ex) 1723 
  function solution(chars) {
    let permute = [];

    const f = (prefix, chars) => {
      for (let i = 0; i < chars.length; i++) {
        // 1. 1 push // 3. 723의 0번째 1+7 push // 6. 23의 0번째 17+2 // 9. 3의 0번째 172+3
        permute.push(prefix + chars[i]);

        // 4. 71 없으니 push // 7. 217없으니 push // 10. 3172 push
        if (permute.indexOf(chars[i] + prefix) === -1) {
          permute.push(chars[i] + prefix);
        }
        
        // 2. 1, 723 push // 5. 17, 2 // 8. 172,3 // 11. 1723, [] ..?
        // ⚠️ 11 번 이후에는 재귀호출로 인하여 나머지 순열들이 나열되는데 이해못함...ㄴ
        console.log(prefix,chars[i], chars.slice(i + 1))
        f(prefix + chars[i], chars.slice(i + 1));
      }
    };

    // 함수 안에서 첫번쨰로 실행되는 재귀함수
    f("", chars);

    let result = permute.filter((x) => x.length === len);
    result.sort((a, b) => {
      return b - a;
    });

    return result[0];
  }

  const num = prompt("숫자를 입력하세요").split("");
  const len = parseInt(prompt("몇 개의 수를 선택하시겠습니까?"), 10);
  console.log(solution(num));

  return <div></div>;
};

export default Quiz83;
