const Solution20 = () => {

  let number = "78720646226947352489";

  const solution = (number) => {
    let sum = 0;
    for(let i = 0; i< number.length; i++){
      sum += parseInt(number[i]);
    }
    return sum % 9
  };

  console.log(solution(number));

  return (  
    <div>

    </div>
  );
}

export default Solution20;