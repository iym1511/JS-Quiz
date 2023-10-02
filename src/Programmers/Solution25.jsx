const Solution25 = () => {

  let st = "banana";
  let is_suffix = "ana";

  const solution = (st, is_suffix) => {
    let answer = 0;
    for(let i = 0; i<st.length; i++){
      if(st.substr(i, st.length) == is_suffix){
        return 1
      }
    }
    return answer;
  }

  console.log(solution(st, is_suffix));

  return (  
    <div>

    </div>
  );
}

export default Solution25;