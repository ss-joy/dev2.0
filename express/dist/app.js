"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_graphql_1 = require("express-graphql");
const morgan_1 = __importDefault(require("morgan"));
const schema_1 = require("./schemas/schema");
const dummy_users_1 = require("./routes/users/dummy-users");
const empty_route_1 = require("./routes/empty/empty.route");
const main_routes_1 = __importDefault(require("./routes/main-routes"));
const auth_route_1 = __importDefault(require("./routes/auth/auth.route"));
const protected_route_1 = __importDefault(require("./routes/protected/protected.route"));
const company_route_1 = require("./routes/gql/company.route");
const gql_user_route_1 = require("./routes/gql/gql-user.route");
const dispense_go_routes_1 = __importDefault(require("./routes/work/dispense-go-routes"));
const fileupload_1 = __importDefault(require("./routes/fileupload"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, morgan_1.default)("short"));
app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
    schema: schema_1.schema,
    graphiql: true,
}));
app.use("/api", main_routes_1.default);
app.use("/api/companies", company_route_1.companyRouter);
app.use("/api/users", gql_user_route_1.gqlUserRouter);
app.use("/api/auth", auth_route_1.default);
app.use("/api/protected", protected_route_1.default);
app.use("/api/dispense-go", dispense_go_routes_1.default);
app.use("/api/dummy-user", dummy_users_1.dummyUsersRouter);
app.use("/api/empty", empty_route_1.emptyRouter);
app.use("/api/file", fileupload_1.default);
// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   console.log(err.cause, err.message, err.name);
//   return res.status(500).json({ message: err.message });
// });
const PORT = process.env.PORT || 3000;
async function startServer() {
    try {
        await (0, mongoose_1.connect)(process.env.MONGODB_URI);
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
    }
    catch (error) {
        console.log("database errosssssdfszzzssz");
        // console.log(error);
    }
}
startServer();
