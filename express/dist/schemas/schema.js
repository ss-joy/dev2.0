"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const axios_1 = __importDefault(require("axios"));
const CompanyType = new graphql_1.GraphQLObjectType({
    name: "Company",
    fields: () => ({
        _id: { type: graphql_1.GraphQLString },
        name: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        users: {
            type: UserType,
            resolve() { },
        },
    }),
});
const UserType = new graphql_1.GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: graphql_1.GraphQLString },
        firstName: { type: graphql_1.GraphQLString },
        age: { type: graphql_1.GraphQLInt },
        company: {
            type: CompanyType,
            resolve(parentValue, args) {
                console.log(parentValue, args);
                return axios_1.default
                    .get(`http://localhost:5000/api/companies/${parentValue.companyId}`)
                    .then((res) => res.data);
            },
        },
    }),
});
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        user: {
            type: UserType,
            args: { id: { type: graphql_1.GraphQLString } },
            resolve(parentValue, args) {
                return axios_1.default
                    .get(`http://localhost:5000/api/users/${args.id}`)
                    .then((resp) => {
                    return resp.data;
                });
            },
        },
        company: {
            type: CompanyType,
            args: {
                id: { type: graphql_1.GraphQLString },
            },
            resolve(parentValues, args) {
                console.log(args);
                return axios_1.default
                    .get(`http://localhost:5000/api/companies/${args.id}`)
                    .then((resp) => {
                    return resp.data;
                });
            },
        },
    },
});
const mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        addUser: {
            type: UserType,
            args: {
                firstName: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString),
                },
                age: {
                    type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt),
                },
                companyId: {
                    type: graphql_1.GraphQLString,
                },
            },
            resolve(pv, args) {
                console.log(args);
                return axios_1.default
                    .post(`http://localhost:5000/api/users`, {
                    firstName: args.firstName,
                    age: args.age,
                    companyId: args?.companyId ? args.companyId : "345",
                })
                    .then((resp) => {
                    return resp.data;
                });
            },
        },
        deleteUser: {
            type: UserType,
            args: { id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) } },
            resolve(pv, args) {
                return axios_1.default
                    .delete(`http://localhost:5000/api/users/${args.id}`)
                    .then((resp) => {
                    return resp.data;
                });
            },
        },
    },
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: mutation,
});
