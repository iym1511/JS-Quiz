
// 문자열 여러번 뒤집기
const SOlution21 = () => {

  let my_string = "rermgorpsam";
  let queries = [[2,3], [0,7], [5,9], [6,10]];

  const solution = (my_string, queries) => {
    let answer = my_string.split("");

    queries.forEach(([s, e]) => {
      const value =  answer.splice(s,e - s + 1).reverse();
        value.reverse().forEach((num)=> {
          answer.splice(s, 0, num);
        })
    })
    return answer.join('');
  }

  console.log(solution(my_string, queries))

  return (  
    <div>

    </div>
  );
}
 
export default SOlution21;