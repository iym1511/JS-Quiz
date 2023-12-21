// 전화번호 목록(해시)

const Solution200 = () => {
  // const phone_book = ["119", "97674223", "1195524421"];
  // const phone_book = ["123","456","789"];
  const phone_book = ["12", "123", "1235", "567", "88"];

  // 40점짜리 내코드
  // const solution = (phone_book) => {
  //   let answer = true;
  //   let phone = phone_book[0];

  //   for(let i = 1; i<phone_book.length; i++){
  //     if(phone_book[i].includes(phone)){
  //       return false
  //     }
  //   }

  //   return answer;
  // }

  const solution = (phone_book) => {
    let hash = {};

    // 각 문자열마다 value 1씩 분배
    for (let i = 0; i < phone_book.length; i++) {
      hash[phone_book[i]] = 1;
    }

    for (let i = 0; i < phone_book.length; i++) {
      let phone = "";
      for (let j = 0; j < phone_book[i].length; j++) {
        phone += phone_book[i][j];
        // phone이 한바퀴돌때마다 숫자가 채워지는데 채워지는도중에
        // hash[phone]이 있고 phone과 phone_book[i]이 다르다면 false출력
        // ex) undefind && 1 !== 123 / 12 && 12 !== 123  false출력!
        if (hash[phone] && phone !== phone_book[i]) {
          return false;
        }
      }

    }

    return true;
  };

  console.log(solution(phone_book));

  return <div></div>;
};

export default Solution200;
