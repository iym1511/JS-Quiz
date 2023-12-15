import { useState } from "react";

// 할인행사
const Solution115 = () => {
  const want = ["banana", "apple", "rice", "pork", "pot"];
  const number = [3, 2, 2, 2, 1];
  const discount = [
    "chicken",
    "apple",
    "apple",
    "banana",
    "rice",
    "apple",
    "pork",
    "banana",
    "pork",
    "rice",
    "pot",
    "banana",
    "apple",
    "banana",
  ];

  // const want = ["apple"];
  // const number = [10];
  // const discount = [
  //   "banana",
  //   "banana",
  //   "banana",
  //   "banana",
  //   "banana",
  //   "banana",
  //   "banana",
  //   "banana",
  //   "banana",
  //   "banana",
  // ];

  // 8.3 점짜리 빈약한 나의정답
  // 0부터 ++ 해서 10칸안에 원하는 음식과 수량이 정확하게 포함되어있으면 그 때의 날짜를 return
  // function solution(want, number, discount) {
  //   let answer = 1;
  //   let obj = {};
  //   let num = 0;
  //   let bool = false;

  //   for (let i = 0; i < want.length; i++) {
  //     obj[want[i]] = 0;
  //   }

  //   while (num + 10 <= discount.length) {
  //     // loop 시작할 때마다 obj 재설정
  //     for (let key in obj) {
  //       obj[key] = 0;
  //     }

  //     discount.slice(num, num + 10).forEach((a) => {
  //       if (obj[a] !== undefined) {
  //         obj[a]++;
  //       }
  //     });

  //     const evry = Object.values(obj).every((a, index) => a === number[index]);

  //     if (evry) {
  //       answer = num + 1;
  //       break;
  //     }

  //     num++;
  //   }

  //   return answer == 1 ? 0 : answer;
  // }

  function solution(want, number, discount) {
    let count = 0;

    for (let i = 0; i < want.length; i++) {
      // 10개씩 자른 영역
      const slice = discount.slice(i, i + 10);

      let flag = true;
      for (let j = 0; j < want.length; j++) {
        // want의 살려는 물건이 첫번째가 바나나인데 i가 2 count가 3이 되어야 첫번째를 통과해서
        // 나머지가 모두 true라 flag가 false가 되고 for문 종료. 
        // ++ 이후 남은for문이 실행되어도 flag가 false기 때문에 count 안됨
        if (slice.filter((item) => item === want[j]).length !== number[j]) {
          flag = false;
          break;
        }
      }

      if (flag) count += 1;

    }
    return count;
  }

  console.log(solution(want, number, discount));

  const [comment, setComment] = useState(''); 

  const [user, setUser] = useState([
    {
      id : 0,
      user : 'iym1511',
      name : '문일윤',
      age : 25,
      comment : 'ㅎㅇ'
    },
    {
      id : 1,
      user : 'qwer',
      name : '홍길동',
      age : 23,
      comment : 'ㅂㅇ'
    },
    {
      id : 2,
      user : 'moon',
      name : '두루미',
      age : 21,
      comment : 'ㅁㄴㅇ'
    }
  ]); 

  const onChange = (e) =>{
    setComment(e.target.value);
  }

  const modify = (user) => {
    setUser((prev) => prev.map((a) => a.user === user.user ? {...a, comment : comment }: {...a}))
  }

  return <div>
    <div>
      {user.map((a) => (
        <div>
          <input type="text" value={comment}  onChange={onChange}/>
          <button onClick={()=>modify(a)}>수정</button>
          <p>{a.user}</p>
          <p>{a.name}</p>
          <p>{a.comment}</p>
          <br/>
        </div>
      ))}
    </div>

  </div>;
};

export default Solution115;
