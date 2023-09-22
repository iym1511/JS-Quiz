// 수 조작하기 2
const Solution10 = () => {

  let numlog = [0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1];

  const solution = (numlog) => {
    let result = '';
    for(let i = 0; i < numlog.length; i++){

      if(numlog[i] - numlog[i+1] == -1){
        result += "w";
      }else if(numlog[i] - numlog[i+1] == 1){
        result += "s";
      }else if(numlog[i] - numlog[i+1] == 10){
        result += "a";
      }else if(numlog[i] - numlog[i+1] == -10){
        result += "d";
      }
    }
    return result;
  }

  console.log(solution(numlog))

  return (  
    <div>

    </div>
  );
}
 
export default Solution10;