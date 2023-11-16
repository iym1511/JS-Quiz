import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useIssues = () => {
  const [issues, setIssues] = useState([]); // Post List
  const [page, setPage] = useState(1); // 현재 페이지
  // 마지막 데이터까지 다 불러온 경우 더이상 요청을 보내지 않기 위해서
  const [moreData, setMoreData] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const getIssues = useCallback(async () => {
    try {
      setIsLoaded(true);
      const res = await axios.get(`http://localhost:5000/data`, {
        state: "open", // 백엔드 요청에 따라 맞게 보내면됨
        sort: "comments", // 백엔드 요청에 따라 맞게 보내면됨
        page: page, // 백엔드 요청에 따라 맞게 보내면됨
      });
      // setIssues((prev) => [...prev, ...data]);
      setIssues([...issues, ...res.data]);
      if (res.data.length === 0) {
        setMoreData(false);
      }
      setPage((prev) => prev + 1);
    } catch (e) {
      throw new Error(`오류입니다. ${e.message}`);
    }finally{
      setIsLoaded(false)
    }
  },[page]);


  useEffect(() => {
    getIssues();
  }, []);

  return { issues, moreData, getIssues, isLoaded};
};

export default useIssues;
