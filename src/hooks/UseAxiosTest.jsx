import useAxios from "./useAxios";

const UseAxiosTest = () => {

  const {loading, data, error, refetch} = useAxios({
    url:"https://yts.mx/api/v2/list_movies.json"
  })

  console.log(`Loading : ${loading}\n Data : ${JSON.stringify(data)}\n Errer : ${error}`);

  return (  
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && "loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}

export default UseAxiosTest;