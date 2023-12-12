import axios from "axios";
import defaultAxios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });

  // useEffect 호출을 위한 status
  const [trigger, setTrigger] = useState(0);

  // Date.now라는 변하는 시간값으로 useEffect를 호출시킴
  const refetch = () => {
    setState({...state, loading : true});
    setTrigger(Date.now());
  }

  // axios 호출
  useEffect(()=>{
    if(!options.url){
      return;
    }

    axiosInstance(options).then(data => {
      setState({
        ...state,
        loading : false,
        data
      });
    }).catch((error)=>{
      setState({...state, loading : false, error })
    })

  }, [trigger]);

  return {...state, refetch}
}

export default useAxios;