const Quiz57 = () => {

  let arrays = []

  const test = () => {

    for(let i = 1; i <= 1000; i++){
      if (i.toString().includes('1')) {
        arrays.push(i)
      }
    }

  }
  console.log(test())
  console.log(arrays.length)

  return (  
    <div>

    </div>
  );
}
 
export default Quiz57;