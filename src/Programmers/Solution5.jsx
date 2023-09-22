const Solution5 = () => {

  let a = 5;
  let b = 3;
  let c = 3;


  const solution = (a, b, c) => {
    let sum = 0;
    if(a !== b && a !== c && b !== c){
      sum = a + b + c;
    }else if (a === b && b === c){
      sum = (a + b + c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3);
    }else if(a === b || a === c || b === c){
      sum = (a + b + c) * (a**2 + b**2 + c**2);
    }
    return sum
  }
  console.log(solution(a, b, c));

  return (  
    <div>

    </div>
  );
}

export default Solution5;