import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { buildSchema, formatArgumentValidationError } from "type-graphql";
import session from "express-session";
import cors from "cors";
import mongoose from "mongoose";

const app = Express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000"
  })
);

const dbName = "db-name";
mongoose.connect(
  `mongodb://localhost:27017/${dbName}`,
  {
    useNewUrlParser: true
  }
);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`now listening for requests on port ${PORT}`);
});
