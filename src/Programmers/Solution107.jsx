import { useCallback } from "react";
import { useState } from "react";
let ids = 0;

// 구명 보트
const Solution107 = () => {  

  // function solution(people, limit) {
  //   let answer = 0;
  //   let obj = {};

  //   for (let i = 0; i < people.length; i++) {
  //     if(!obj[people[i]]){
  //       obj[people[i]] = people[i]
  //     }else{
  //       obj[people[i]] += people[i]
  //     }
  //   }
  //   console.log(i)
  //   Object.values(obj).map((a) => {
  //     if(limit >= a){
  //       answer++;
  //     }
  //   })

  //   return answer;
  // }

  const people = [70, 50, 80, 50];
  const limit = 100;

  function solution(people, limit) {
    let answer = 0
    // 오름차순 정렬 50,50,70,80
    people.sort((a, b) => a - b);
    let i = 0

    // 0 < 3
    for(let length = people.length-1; i < length; length--) {
      // 50 + 50 <= 100  i = 1;
        if(people[i] + people[length] <= limit ) i++
    }    

    return people.length-i;
}

  console.log(solution(people, limit));

  
  const [editText, setEditText] = useState('');
  const [todo, setTodo] = useState([]);

  const pushTodo = () => {
    ids+=1;
    setTodo((prev) => [...prev, account])
  }

  const deleteTodo = (id) => {
    setTodo(todo.filter((a) => a.id !== id))
  }


  const handleEditChange = useCallback((e) => {
    setEditText(e.target.value);
  },[editText]);
  
  const upDateTodo = (id) => {
    setTodo((todo) => todo.map((a) => a.id === id ?  { ...a, name: editText }: {...a}));
    setEditText(''); // 수정 완료 후 입력값 초기화
  };
  const [account, setAccount] = useState({
    id : ids,
    password : '',
    name : ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount((prevAccount) => ({
      ...prevAccount,
      [name]: value, // 해당 name에 해당하는 속성을 새로운 value로 업데이트
    }));
  };

  return <div>
    <input type="text" name="id" value={account.id} onChange={handleChange} placeholder="아이디"/>
    <input type="text" name="password" value={account.password} onChange={handleChange} placeholder="비밀번호"/>
    <input type="text" name="name" value={account.name} onChange={handleChange} placeholder="이름"/>
    <button onClick={pushTodo}>추가</button>
    <div style={{display:'flex', flexWrap:'wrap', width:'50%', border:'1px solid red',flexDirection:'column', margin:'auto'}}>
    {
      todo?.map((a) => (
        <div>
          <span>{a.id}</span>
          <span>{a.name}</span>
          <button onClick={()=>deleteTodo(a.id)}>삭제</button>
          <input type="text" value={editText} onChange={handleEditChange}/>
          <button onClick={()=>upDateTodo(a.id)}>수정</button>
        </div>
      ))
    }
    </div>
    <section style={{display:'flex', border:'1px solid green', width:'100%', height:'100%',gridTemplateColumns:'repeat(3, 1fr)', gridGap: '20px',justifyContent:'center'}}>
      <div style={{border:'1px solid blue', width:'300px',height:'height: calc(40vh - 100px)'}}></div>
      <div style={{border:'1px solid blue', width:'300px',height:'height: calc(40vh - 100px)'}}></div>
      <div style={{border:'1px solid blue', width:'300px',height:'height: calc(40vh - 100px)'}}></div>
    </section>
  </div>;
};

export default Solution107;
