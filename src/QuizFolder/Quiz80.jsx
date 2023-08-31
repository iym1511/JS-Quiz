import { useEffect } from "react";

const Quiz80 = () => {
  const consonant = prompt("자음을 입력하세요").split("");
  const num = parseInt(prompt("출력할 조합의 수를 입력하세요"), 10);

  
  const consonantHandler = (chars) => {
    let arrays = [];

    const f = (prefix, chars) => {
      for (let i=0; i<chars.length; i++) {
        // 1. ㄱ push // 3. ㄱ,ㄴ push
        arrays.push(prefix + chars[i]);
        console.log(prefix,chars[i])
        // 2. 인자로 prefix자리에 '' + ㄱ char에는 ㄴ // 4. ㄱㄴ, ㄷ [이 과정 반복]
        f(prefix + chars[i], chars.slice(i + 1));
      }
    }

    // 함수안에서 첫번째로 실행되는 재귀함수
    f('', chars);
    
    // 입력한 num이 배열안의 길이가 같은것들만 filter
    const result = arrays.filter((a) => a.length === num);
    console.log(result)

    return result

  };

    console.log(consonantHandler(consonant));

  return <div></div>;
};

export default Quiz80;
