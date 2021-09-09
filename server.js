const { response } = require("express");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
// const { graphqlHTTP } = require("express-graphql");
// const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");
const { buildSchema } = require("graphql");

//Construct a schema, using GraphQL schema language
const schema = buildSchema(`
type Query{
    hello:String
}`);

//The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return "Hello World";
  },
};

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000);
console.log(
  "Running a GraphQL Api server at port http://localhost:4000/graphql"
);

//Run the GraphQL query `{hello}' and print out the response
// graphql(
//   schema,
//   `
//     {
//       hello
//     }
//   `,
//   root
// ).then((response) => {
//   console.log(response);
// });

// const app = express();
// const schema1 = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: "Hello world",
//     fields: () => ({
//       message: {
//         type: GraphQLString,
//         resolve: () => "Hello World",
//       },
//     }),
//   }),
// });

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema1,
//     graphql: true,
//   })
// );
// app.listen(5000, () => console.log("server running"));
