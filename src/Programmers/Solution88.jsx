const Solution88 = () => {

  const score = [10, 100, 20, 150, 1, 100, 200];
  const k = 3;

  function solution(k, score) {
    let answer = [];
    let list = []
    score.map((a,i) => {
      if(answer.length != k){
        list.push(a);
        answer.push(Math.min(...list))
      }else{
        let count = 0;
        list.sort().map((b) => {
          if(a > b){
            count+=1
          }
        })
        if(count == 3){
          list.sort((a,b) => b-a).unshift(a);
          list.sort((a,b) => b-a).pop();
          answer.push(Math.min(...list));
        }else if(count == 1){
          list.sort((a,b) => b-a).pop()
          list.sort((a,b) => b-a).push(a)
          answer.push(Math.min(...list));
          console.log(a)
        }else if(count == 0){
          answer.push(Math.min(...list));
        }

      }
    })

    return answer;
  }

  console.log(solution(k, score))

  return (  
    <div>

    </div>
  );
}
 
export default Solution88;