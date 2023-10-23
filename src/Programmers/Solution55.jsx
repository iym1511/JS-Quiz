const Solution55 = () => {

  let s = "a B z";
  let n = 4;

  function solution(s, n) {
    let sCopy = s.toLowerCase();
    const list = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 
                  'w', 'x', 'y', 'z'];
    let answer = '';

  
  
    for (let i = 0; i < s.length; i++) {
      if(s[i] == " "){
        answer += " ";
      }

      // index 추출 
      let index = list.indexOf(sCopy[i]);

      if (index !== -1) {
        // 몫이 0 이면 바로 나머지 환산 / 0으로 안 나누어 떨어질 때 나머지 환산
        let newIndex = (index + n) % list.length;
        
        if (s[i].toUpperCase() === s[i]) { // 대문자 처리
          answer += list[newIndex].toUpperCase();
        } else {
          answer += list[newIndex];
        }
      }
    }
  
    return answer;
  }
  
  console.log(solution(s, n));

  return (  
    <div>

    </div>
  );
}

export default Solution55;