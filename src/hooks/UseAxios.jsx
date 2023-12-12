import { useAxios } from "./useAxios";

const UseAxios = () => {

  const {loading, data, error} = useAxios({
    url:"https://yts.am/api/v2/list_movies.json"
  })
  console.log()

  return (  
    <div>

    </div>
  );
}
 
export default UseAxios;