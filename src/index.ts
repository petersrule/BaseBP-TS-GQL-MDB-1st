import "reflect-metadata";
import mongoose from "mongoose";
import { buildSchema } from "type-graphql";
import Express from "express";
import { ApolloServer } from "apollo-server-express";

// local imports
import { RegisterResolver } from "./modules/RegisterResolver";

// set the name of the database to run from
const DBNAME = "testDB";

// set up port
const PORT = process.env.PORT || 3333;

const bootstrap = async () => {
  await mongoose.connect(
    `mongodb://localhost:27017/${DBNAME}`,
    {
      useNewUrlParser: true
    }
  );

  const schema = await buildSchema({
    resolvers: [RegisterResolver]
  });

  const server = new ApolloServer({
    schema,
    playground: true
  });

  const app = Express();

  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

bootstrap();
