import { useState } from "react";

// 신고 결과 받기_ 2022 KAKAO BLIND RECRUITMENT
const Solution85 = () => {
  const [asd, setAsd] = useState([
    {
      id:1,
      name:"qwe"
    }
  ])

  const q = [{
    id:2,
    name:"xxx"
  }]

  const aa = () =>{
    setAsd((prev)=>[...prev, ...q])
  }



  // 하다말은 내 코드 💡

  // const solution = (id_list, report, k) => {
  //   let answer = [];

  //   let userList = {
  //     muzi : [],
  //     frodo : [],
  //     apeach : [],
  //     neo : []
  //   }

  //   let reportNum = {
  //     muzi : 0,
  //     frodo : 0,
  //     apeach : 0,
  //     neo : 0
  //   }

  //   for(let i = 0; i<report.length; i++){
  //     userList[report[i].split(" ")[0]].push(report[i].split(" ")[1])
  //     reportNum[report[i].split(" ")[1]] = reportNum[report[i].split(" ")[1]] + 1
  //     // console.log(reportNum)
  //   }

  //   for(let i = 0; i<id_list.length; i++){

  //       userList[id_list[i].split(" ")].forEach((a,index) => {
  //         if(reportNum[a] == k ){
  //           console.log(userList[report[index]])
  //           // userList[id_list[i].split(" ")] = userList[id_list[i].split(" ")];
  //         }
  //         // console.log(userList)
  //       })

        
  //     }
    

  //   return answer
  // }

  const id_list = ["muzi", "frodo", "apeach", "neo"];
  const report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
  const k = 2 // 정지가되는 신고횟수

  function solution(id_list, report, k) {
    const reportIdsSet = {}
    const reportCountsSet = {}

    // 내가 했던것처럼  유저가 신고한 ID와 신고당한 횟수를 저장할 객체를 만듦
    id_list.forEach((id)=>{
        reportIdsSet[id] = []
        reportCountsSet[id] = 0
    })

    // 💡 여기까진 똑같이 처리함
    // 본인을 제외한 유저가 신고한 ID를 reportIdsSet{}에 넣고
    // 신고당한 사람 횟수를 reportCountsSet{}에 증가
    report.forEach((reportData)=>{
        const [reporter,reported] = reportData.split(' ')
        if(!reportIdsSet[reporter].includes(reported)){
            reportIdsSet[reporter].push(reported);
            reportCountsSet[reported]++
        }
    })

    // reportCountsSet을 배열화 시켜서 신고당한 횟수가 2이상인 것들의 id를 필터함
    // 결과 ['frodo', 2] ['neo', 2] 를 map으로 한번더 풀어서 id만 출력 
    const pauseIds = Object.entries(reportCountsSet).filter(([id,reportCount])=>reportCount >= k).map(([id,reportCount])=>id)


    const answer = id_list.map((id)=>{
        // 유저가 신고한 id 배열리스트
        const reportIds = reportIdsSet[id]
        let reportCount = 0
        
        reportIds.forEach((reportId)=>{
          console.log(reportId)
          if(pauseIds.includes(reportId)){
            // 'frodo', 'neo'가 맞으면 count++
            reportCount++
          }
        })
        // 배열을 return하니 결과값도 2return 1return 1return 0return 해서 [2,1,1,0]
        return reportCount
    })

    return answer;
}

  console.log(solution(id_list, report, k))

  return (  
    <div>
    </div>
  );
}

export default Solution85;