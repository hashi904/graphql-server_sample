/* index.js */

const express = require("express");
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require("./schema");
const resolvers = require("./resolvers");


const app = express();

// サンプルのエンドポイントの設定
app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        rootValue: resolvers,
        graphiql: true
    })
);


const port = process.env.PORT || 4200;

app.listen(port);

console.log(`🚀 Server ready at http://localhost:4200/graphql`);