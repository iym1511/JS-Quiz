// 이진 변환 반복하기
const Solution98 = () => {
  const s = "110010101001";

  function solution(s) {
    let convertCount = 0, deleteZeroCount = 0
    while(s !== '1'){
        // 현재 길이
        const beforeSLength = s.length
        // 정규식으로 0인자리는 빈칸이으로바꾼것의 길이
        const nowSLength = s.replace(/0/gi,'').length

        // 과정 반복 수 ++
        convertCount++
        // 현재 길이와 0이 아닌 수 의길이를 빼면 0의 갯수만큼 더해짐 
        deleteZeroCount += (beforeSLength - nowSLength)
        // s를 이진변환을해서 같은과정 반복
        s = nowSLength.toString(2)
    }
    const answer = [convertCount, deleteZeroCount]
    return answer
}

  console.log(solution(s));

  return <div></div>;
};

export default Solution98;
