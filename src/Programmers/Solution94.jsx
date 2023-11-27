// 개인정보 수집 유효기간
const Solution94 = () => {

  const today = "2022.05.19";
  const terms = ["A 6", "B 12", "C 3"];
  const privacies = [
    "2021.05.02 A",
    "2021.07.01 B",
    "2022.02.19 C",
    "2022.02.20 C",
  ];

  // 다른사람 풀이를 적용시켜봣더니 30점이 나온 내 코드
  // function solution(today, terms, privacies) {
  //   let answer = [];
  //   let obj = {};
  //   today = new Date(today);

  //   terms.forEach((a) => {
  //     const [monthType, period] = a.split(" ");
  //     obj[monthType] = period;
  //   });

  //   privacies.forEach((a,i) => {
  //     const [period, monthType] = a.split(" ");
  //     const date = new Date(period);
  //     for (let key in obj) {
  //       if (monthType == key) {
  //         for (let i = 1; i <= obj[key]; i++) {
  //           const lastDay = new Date(
  //             date.getFullYear(),
  //             date.getMonth() + i,
  //             0
  //           ).getDate();
  //           date.setDate(date.getDate() + lastDay);
  //         }
  //       }
  //     }
  //     if(date < today){
  //       answer.push(Number(i)+1)
  //     }
  //   });

  //   return answer;
  // }



  // 다른사람의 풀이
  function solution(today, terms, privacies) {
    const termsT = {}; // {A:6, B:12, C:3}
    const arr = [];
    today = new Date(today);

    for (const value of terms) {
      const [monthType, period] = value.split(" ");
      termsT[monthType] = Number(period);
    }

    for (const idx in privacies) {
      const [CollectionDate, monthType] = privacies[idx].split(" ");
      const date = new Date(CollectionDate);
      
      date.setMonth(date.getMonth() + termsT[monthType]); // 여기까지 일치했던 코드

      // 6개월이 지난 날짜가 오늘보다 작으면 유효기간 만료로 arr에 index값 추가
      console.log(date,today) 

      if (date <= today) {
        arr.push(Number(idx) + 1);
      }
    }
    return arr;
  }

  console.log(solution(today, terms, privacies));

  return <div></div>;
};

export default Solution94;
