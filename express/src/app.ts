import express, { NextFunction, Request, Response } from "express";
import { connect } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { graphqlHTTP } from "express-graphql";
import morgan from "morgan";
import WebSocket from "ws";
import socketIo from "socket.io";

import { schema } from "./schemas/schema";

import { dummyUsersRouter } from "./routes/users/dummy-users";
import { emptyRouter } from "./routes/empty/empty.route";
import mainRouter from "./routes/main-routes";
import authROuter from "./routes/auth/auth.route";
import protectedRouter from "./routes/protected/protected.route";
import { gqlRouter } from "./routes/gql/gql.route";
import { companyRouter } from "./routes/gql/company.route";
import { gqlUserRouter } from "./routes/gql/gql-user.route";
import dispenseGoRouter from "./routes/work/dispense-go-routes";
import fileUploadRouter from "./routes/fileupload";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("short"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.use("/api", mainRouter);
app.use("/api/companies", companyRouter);
app.use("/api/users", gqlUserRouter);
app.use("/api/auth", authROuter);
app.use("/api/protected", protectedRouter);
app.use("/api/dispense-go", dispenseGoRouter);
app.use("/api/dummy-user", dummyUsersRouter);
app.use("/api/empty", emptyRouter);
app.use("/api/file", fileUploadRouter);

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   console.log(err.cause, err.message, err.name);
//   return res.status(500).json({ message: err.message });
// });

const PORT = process.env.PORT || 3000;
async function startServer() {
  try {
    await connect(process.env.MONGODB_URI as string);
    const server = app.listen(PORT, () => {
      console.log("server listening on port " + PORT);
    });
    // const wsS = new WebSocket.WebSocketServer({
    //   server,
    // });
    // wsS.on("headers", (headers, request) => {
    //   console.log("headers ok");
    // });
    // wsS.on("connection", (webSocket, request) => {
    //   console.log("connection established");
    //   webSocket.send("you have connected to the server");
    //   webSocket.on("message", (e) => {
    //     console.log("message from the client", e.toString());
    //   });
    // });
  } catch (error) {
    console.log("database errosssssdfszzzssz");
    // console.log(error);
  }
}

startServer();
