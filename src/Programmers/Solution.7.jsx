// 이어붙인 수
const Solution7 = () => {

  const num_list = [3, 4, 5, 2, 1];

  const solution = (num_list) => {
    let result = '';
    let result2 = '';

    num_list.map((a) => {
      return a % 2 === 0 ?  result2 += String(a) : result +=  String(a)
    })

    // 문자열 앞에 +가 붙으면 암묵적으로 타입 변환
    return +result + +result2;
  }

  
  console.log(solution(num_list))

  return (  
    <div>

    </div>
  );
}
 
export default Solution7;