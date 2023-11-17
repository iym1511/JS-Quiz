// 2021 KAKAO BLIND RECRUITMENT 신규 아이디 추천

import { useState } from "react";

const Solution84 = () => {
  // 💡 65점짜리 내 코드 방법은 엄청 비슷했으나 간결하지 못함 💡

  // const new_id = "...!@BaT#*..y.abcdefghijklm";
  // const new_id = "=.="

  // function solution(new_id) {
  //   let answer = [];
  //   const regex = /[^a-z0-9\-_.]/g;
  //   const regex2 = /\.{2,}/g;

  //   let firstResult = new_id.toLowerCase();
  //   let twoResult = firstResult.replace(regex, "");
  //   let threeResult = twoResult.replace(regex2, ".");
  //   let fourResult =
  //     threeResult[threeResult.length - 1] == "."
  //       ? threeResult.slice(0, -1)
  //       : threeResult[0] == "."
  //       ? threeResult.slice(1)
  //       : threeResult;

  //   let fiveResult = fourResult == "" ? "a" : fourResult;

  //   let sixResult = () => {
  //     const result = fiveResult.split("").slice(0, 15).join("");
  //     if (fiveResult.length > 15) {
  //       if (result[result.length - 1] == ".") {
  //         return result.slice(0, -1);
  //       }
  //     } else {
  //       return fiveResult;
  //     }
  //     return result;
  //   };

  //   if (sixResult().length <= 2) {
  //     for(let i = 0; i < sixResult().length-1; i++){
  //         answer.push(sixResult()[i])
  //       }

  //     for(let i = 0; i < 3; i++){
  //       if(answer.length != 3){
  //         console.log(answer)
  //         answer.push(sixResult()[sixResult().length - 1])
  //       }
  //     }
  //   } else {
  //     answer.push(sixResult());
  //   }

  //   return answer.join("");
  // }

  // console.log(solution(new_id));

  const new_id = "...!@BaT#*..y.abcdefghijklm";
  function solution(new_id) {
  
    const searchId = (new_id) => {
      let result = new_id
        .toLowerCase()
        .replace(/[^\w\-\.]/g, "")  // 1단계 규칙
        .replace(/\.{2,}/g, ".")  // ..제거
        .replace(/^\./, "")  // 시작부분 . 제거
        .replace(/\.$/, ""); // 끝부분 . 제거

      // 5단계 규칙
      if (result.length === 0) result = "a";

      // 6단계 규칙
      if (result.length >= 16) {
        result = result.slice(0, 15).replace(/\.$/, "");
      }

      // 7단계 규칙
      // 마지막 문자열을 3 - 문자열길이만큼 반복
      if (result.length <= 2) {
        result = result.concat(
          result[result.length - 1].repeat(3 - result.length)
        );
      }

      return result;
    };

    return searchId(new_id);
  }

  console.log(solution(new_id))

  const [account, setAccount] = useState({
    id : '',
    password : '',
    name : ''
  });

  const onHandleChange = (e) =>{
    setAccount((prev) => ({...prev, id : e.target.value}));
  }

  const enterBtn = (e) =>{
    if(e.key == 'Enter'){
      alert(account.id);
    }else{
      alert(account.id)
    }
  }

  return <div>
    {/* <form onSubmit={}> */}
      <label>아이디</label>
      <input type="text" onChange={onHandleChange} value={account.id} onKeyPress={enterBtn}/>
      <span>{account.id}</span>
      <button onClick={enterBtn}>아이디 확인</button>
    {/* </form> */}
  </div>;
};

export default Solution84;
