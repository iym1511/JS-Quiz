// # 문제48 : 대소문자 바꿔서 출력하기

// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

// 입출력

// 입력 : AAABBBcccddd
// 출력 : aaabbbCCCDDD

const Quiz48 = () => {

  let text = prompt("대소문자를 입력하시오.");
  let arrays = [];
  let result = '';

  // text[i] : 문자열의 위치를 하나씩 거처가며 대문자인지 인식함
  for(let i = 0; i < text.length; i++){
    if(text[i] === text[i].toUpperCase()){
      arrays.push(text[i].toLowerCase())
    }else{
      arrays.push(text[i].toUpperCase())
    }
  }

  console.log(arrays)

  for(let j=0; j < arrays.length; j++){
    result += arrays[j]
  }

  console.log(result)

  return (  
    <div>

    </div>
  );
}
 
export default Quiz48;