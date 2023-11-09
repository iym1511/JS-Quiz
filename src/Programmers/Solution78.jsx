const Solution78 = () => {
  // ["marina", "josipa", "nikola", "vinko", "filipa"]
  // ["josipa", "filipa", "marina", "nikola"]

  const participant = ["marina", "josipa", "nikola", "vinko", "filipa"]; // 참여한 선수 이름
  const completion = ["josipa", "filipa", "marina", "nikola"]; // 완주한 선수 이름

  // const participant = ["mislav", "stanko", "mislav", "ana"]; // 참여한 선수 이름
  // const completion = ["stanko", "ana", "mislav"]; // 완주한 선수 이름

  // function solution(participant, completion) {
  //   let answer = "";
  //   let result = {}

  //   for(let i = 0; i<participant.length; i++) {
  //     if(result[participant[i]] == undefined){
  //       result[participant[i]] = 0;
  //     }else{
  //       result[participant[i]]++;
  //     }
  //   }

  //   for(let i = 0; i<completion.length; i++) {
  //     result[completion[i]]++;
  //     if(result[completion[i]] == 2){
  //       answer += completion[i]
  //     }
  //   }

  //   Object.keys(result).find((a) =>{
  //     if(result[a] == 0){
  //       answer += a
  //     }
  //   })


  //   return answer;
  // }

  function solution(participant, completion) {
    var answer = '';

    // 마지막 칸에 공백을 주어 중복이 있을경우 
    // 해당 문자열은 answer에 추가시키고
    // 중복이 없을경우 마지막 문자열인 arr1[i]를 추가 (남는것은 맨 뒤에 있을 태니깐)
    completion[completion.length] = '';

    var arr1 = participant.sort();
    var arr2 = completion.sort();

    for(let i=0; i<arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            answer = arr1[i];
        }
    }

    return answer;
}


  return (
    <div>
      <h1>{solution(participant, completion)}</h1>
    </div>
  );
};

export default Solution78;
