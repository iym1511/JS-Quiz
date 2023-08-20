const Quiz56 = () => {

  const nationWidth = {
    'korea': 220877,
    'Rusia': 17098242,
    'China': 9596961,
    'France': 543965,
    'Japan': 377915,
    'England' : 242900,
  }

  const entry = Object.entries(nationWidth);
  const keys = Object.keys(nationWidth);
  const values = Object.values(nationWidth);
  
  const test = () => {
    let arrays = [];

    for(let i = 1; i < keys.length; i++){
      let result = values[i] - nationWidth.korea
      let key = keys[i]
      arrays.push({
        key,
        result
      })
    }
    console.log(arrays)
    return arrays.sort((a,b) => a.result-b.result)[0]
  }
  console.log(test())

  return (  
    <div>

    </div>
  );
}
 
export default Quiz56;