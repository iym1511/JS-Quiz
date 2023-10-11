import styled from '@emotion/styled';

const Solution42 = () => {

  // const number = [-2, 3, 0, 2, -5];
  const number = [-3, -2, -1, 0, 1, 2, 3];

  function solution(number) {
      let answer = 0;
      for(let i = 0; i < number.length-2; i++){
          for(let j = i+1; j < number.length-1; j++){
              for(let k = j+1; k < number.length; k++){
                    const sum = number[i] + number[j] + number[k]
                  if(sum === 0) answer++
              }
          }
      }
      return answer;
  }

  console.log(solution(number));

  return (  
    <Wrapper>
      <Container>
        <Text>안녕하세요</Text>
      </Container>
    </Wrapper>
  );
}

export default Solution42;

const Wrapper = styled.div`
  border: 1px solid red;
`

const Container = styled.div`
  border: 1px solid red;
  margin: auto;
  width: 100%;
  height: 400px;
`

const Text = styled.p`
  border: 1px solid black;
  width: 100px;
  height: 100px;
  margin: auto;
`