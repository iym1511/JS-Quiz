const Solution8 = () => {
  let num_list = [5, 2, 1, 7, 5];

  const solution = (num_list) => {
    const lastIndex = num_list.length - 1;

    if(num_list[lastIndex - 1] < num_list[lastIndex]){
      num_list.push(num_list[lastIndex] - num_list[lastIndex - 1]) 
    }else{
      num_list.push(num_list[lastIndex] * 2)
    }
    
    return num_list
  };

  console.log(solution(num_list));

  return <div></div>;
};

export default Solution8;
