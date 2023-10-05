// 카카오 채용연계형 인턴쉽 / 숫자 문자열과 영단어
const Solution35 = () => {
  const s = "one4seveneight";

  function solution(s) {
    let answer = s;
    const numList = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
    };

    let keys = Object.keys(numList);

    for(let i of keys){
      if(s.includes(i)){
        // 여러 패턴을 일괄적으로 처리하거나 미래에 발생할 수 있는 다양한 상황에 
        // 대비하기 위해 정규식을 사용하는 것이 권장
        const regex = new RegExp(i, 'g');
        answer = answer.replace(regex, numList[i]);
      }
    }

    return parseInt(answer, 10);
  }

  console.log(solution(s));

  return <div></div>;
};

export default Solution35;
