const Quiz82 = () => {

  function math(e) {
    let step = 0;
    for(let i in e){
      if(e[i] === '('){
        step += 1
      }else if(e[i] === ')'){
        step -= 1 
      }

      if(step !== 0){
        // 괄호가 올바르게 닫히면 1+ 1- 라서 0이 될 수 없음
        return false
      }
      if(step === 0){
        return true
      }
    }
  }

  const testFc = () => {
    while (1) {
      let order = parseInt(prompt("데이터 입력(1), 프로그램 종료(2)"),10);
      if (order === 1) {
        const ex = prompt("데이터를 입력하세요").split('');
        console.log(math(ex));
      } else {
        break;
      }
    }
  }
  

  return <div>
    <h1>테스트</h1>
    <button onClick={testFc}>실행버튼</button>
  </div>;
};

export default Quiz82;
