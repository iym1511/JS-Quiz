const Solution3 = () => {

  // function solution(code) {
  //   let result = "";
  //   let mode = 0;

  //   for (let i = 0; i < code.length; i++) {
  //     if (mode === 0) {
  //       if (code[i] !== '1' && i % 2 === 0) {
  //         result += code[i]
  //       } else if(code[i] == 1){
  //         mode = 1;
  //       }
  //     } else if (mode === 1) {
  //       if (code[i] !== '1' && i % 2 !== 0) {
  //         result += code[i]
  //       } else if(code[i] == 1){
  //         mode = 0;
  //       }
  //     }
  //   }
  //   return result ? result : "EMPTY"
  // }


function solution(code) {
    let mode =0;
    let str ="";
    for(let i = 0 ; i < code.length ; i++){
        if(code[i]==="1") {
          mode = (mode ===0)? 1 : 0; 
          continue;
        }
        if(mode ===0){
            if(i%2===0) str+= code[i];
        }else{
            if(i%2===1) str+= code[i];
        }
    }
    return str.length===0 ? "EMPTY" : str; 
}

  let code = "abc1abc1abc";

  console.log(solution(code));

  return <div></div>;
};

export default Solution3;
