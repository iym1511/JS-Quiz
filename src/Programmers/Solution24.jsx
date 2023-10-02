// 접미사 배열
const Solution24 = () => {

  const my_string = "banana";

  const solution = (my_string) => {
    let answer = [];
    for(let i = 0; i<my_string.length; i++){
      answer.push(my_string.substr(i, my_string.length));
    }

    return answer.sort();
  }

  console.log(solution(my_string))

  return (  
    <div>

    </div>
  );
}

export default Solution24;