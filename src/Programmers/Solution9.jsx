const Solution9 = () => {

  let n = 0;
  let control = "wsdawsdassw";

  const solution = (n, control) => {
    for(let i = 0; i < control.length; i++){
      if(control[i] === "w"){
        n += 1
      }else if(control[i] === "s"){
        n -= 1
      }else if(control[i] === "d"){
        n += 10
      }else if(control[i] === "a"){
        n -= 10
      }
    }
    return n

  }

  console.log(solution(n, control));

  return (  
    <div>

    </div>
  );
}
 
export default Solution9;