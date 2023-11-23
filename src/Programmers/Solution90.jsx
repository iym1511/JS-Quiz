//2018 KAKAO BLIND RECRUITMENT [1차] 다트 게임

const Solution90 = () => {

  // 하다말은 3점짜리 내 코드
  // function solution(dartResult) {
  //   let answer = 0;
  //   let sum = 0;
  //   let powCount = 0;
  //   const dartResults = dartResult.split("");
  //   const powNum = (dartResult.match(/\*/g) || []).length;

  //   for(let i = 0; i<dartResults.length; i++){
  //     let dartNumP = Number(dartResults[i+1]);
  //     let dartNumM = Number(dartResults[i-1]);

  //     if(dartResults[i] == "S"){
  //       sum += Math.pow(dartNumM,1)
  //       if(dartNumP == "*" && powCount == 0){
  //         if(powNum == 2){
  //           sum += sum * 2 * 2
  //         }else{
  //           sum += sum * 2;
  //           powCount++;
  //         }
  //       }else if(dartNumP == "*" && powCount != 0){
  //         sum += sum * 2
  //       }else if(dartNumP == "#"){
  //         sum *= (-1)
  //       }
  //     }

  //     if(dartResults[i] == "D"){
  //       sum += Math.pow(dartNumM,2)
  //       if(dartNumP == "*" && powCount == 0){
  //         if(powNum == 2){
  //           sum += sum * 2 * 2
  //         }else{
  //           sum += sum * 2;
  //           powCount++;
  //         }
  //       }else if(dartNumP == "*" && powCount != 0){
  //         sum += sum * 2
  //       }else if(dartNumP == "#"){
  //         sum *= (-1)
  //       }
  //     }

  //     if(dartResults[i] == "T"){
  //       sum += Math.pow(dartNumM,3)
  //       if(dartNumP == "*" && powCount == 0){
  //         if(powNum == 2){
  //           sum += sum * 2 * 2
  //         }else{
  //           sum += sum * 2;
  //           powCount++;
  //         }
  //       }else if(dartNumP == "*" && powCount != 0){
  //         sum += sum * 2
  //       }else if(dartNumP == "#"){
  //         sum *= (-1)
  //       }
  //     }
  //     console.log(sum)

  //   }
  //   return answer;
  // }

  const dartResult = "1S2D*3T";

  function solution(dartResult) {
    const bonus = { S: 1, D: 2, T: 3 },
      options = { "*": 2, "#": -1, undefined: 1 };

    // dartResult 문자열에서 숫자, 옵션 구분 기호 및 숫자 뒤에 따라오는 문자를 모두 찾아서 반환
    // \d: 숫자에 대응합니다.
    // .: 소수점에 대응합니다. (?가 있으므로 소수점이 있을 수도 없을 수도 있습니다.)
    // \D: 숫자가 아닌 문자에 대응합니다.
    // 그러므로 /d.?\D/는 다트 결과에서 숫자, 소수점(있을 수도 없을 수도), 그리고 그 뒤에 나오는 숫자가 아닌 문자를 함께 추출하는 패턴입니다.
    let darts = dartResult.match(/\d.?\D/g); // ["1S","2D*","3T"]

    for (let i = 0; i < darts.length; i++) {
    // 이 정규식은 다트 결과의 각 차례에서 숫자, 보너스 옵션(S, D, T), 그리고 옵션의 추가 기호(*, #)를 추출하는 데 사용됩니다. 여러 부분으로 나뉘어 있습니다:

    // (^\d{1,}): 이 부분은 문자열의 시작(^)에서부터 최소 1자리 이상의 숫자에 대응합니다. 이 숫자는 해당 차례의 점수를 나타냅니다.
    // (S|D|T): 이 부분은 S, D, T 중 하나에 대응합니다. 이는 보너스 옵션을 나타냅니다.
    // (\*|#)?: 이 부분은 * 또는 # 중 하나가 0 또는 1번 등장할 수 있습니다. 이는 옵션의 추가 기호를 나타냅니다.
    // 따라서 /^\d{1,}(S|D|T)(\*|#)?/는 각 차례에서 숫자, 보너스 옵션, 그리고 옵션의 추가 기호를 추출하는 패턴입니다.

      let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      // options에 undefind는 아무런 조건이 없을때 그대로 유지하기위해 1을 곱해줌
        score = Math.pow(split[1], bonus[split[2]]) * options[split[3]]; // (1,1)*1,(2,2)*2,(3,3)*1

      // * 일때 이전값에 2만큼 곱해준값으로 변경
      if (split[3] === "*" && darts[i - 1]) {
        darts[i - 1] *= options["*"];
      }
      darts[i] = score; // 결과값을 ["1S","2D*","3T"] 에 순서대로 넣음
    }

    return darts.reduce((a, b) => a + b); 
  }

  console.log(solution(dartResult));

  return <div></div>;
};

export default Solution90;
