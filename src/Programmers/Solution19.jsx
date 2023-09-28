const Solution19 = () => {

  let my_string = "cvsgiorszzzmrpaqpe";
  let index_list = [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7];

  const solution = (my_string, index_list) => {
    let answer = '';
    for(let i of index_list){
      answer += my_string[i];
    }
    return answer
  }

  console.log(solution(my_string, index_list));

  return (  
    <div>

    </div>
  );
}
 
export default Solution19