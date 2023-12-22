import { ApolloServer, gql } from "apollo-server";
const server = () => {
  // type Query는 restAPI에서 이 형태로 만든것과 같다
  // GET /text

  // 사용자가 request할 수 있도록 하고 싶은 모든 건 type Query안에 있어야한다.
  const typeDefs = gql`
    type Query {
      text: String
    }
  `;

  const server = new ApolloServer({ typeDefs });

  // listen() 은 Promise이다.
  server.listen().then(({ url }) => {
    console.log(`Running ${url}`);
  });
};

export default server;
