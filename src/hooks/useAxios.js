import axios from "axios";
import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (options,   axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });

  if(!options.url){
    return;
  }
  useEffect(()=>{

  },[])

  return state
}

export default useAxios;