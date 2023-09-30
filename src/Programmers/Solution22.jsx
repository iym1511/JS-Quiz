// 부분 문자열 이어 붙여 문자열 만들기

const Solution22 = () => {

  const my_strings = ["progressive", "hamburger", "hammer", "ahocorasick"];
  const parts = [[0, 4], [1, 2], [3, 5], [7, 7]];

  const solution = (my_strings, parts) => {
    let answer = '';

    parts.forEach(([s, e],i) => {
      answer += my_strings[i].split("").splice(s, e - s + 1).join("");
    })
    return answer
  }

  console.log(solution(my_strings,parts));

  return (  
    <div>

    </div>
  );
}
 
export default Solution22;