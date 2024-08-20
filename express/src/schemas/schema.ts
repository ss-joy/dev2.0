import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} from "graphql";
import axios from "axios";
import { GqlUser } from "../models/gql-user.model";

const CompanyType = new GraphQLObjectType({
  name: "Company",
  fields: () => ({
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    users: {
      type: UserType,
      resolve() {},
    },
  }),
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType,
      resolve(parentValue, args) {
        console.log(parentValue, args);
        return axios
          .get(`http://localhost:5000/api/companies/${parentValue.companyId}`)
          .then((res) => res.data);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:5000/api/users/${args.id}`)
          .then((resp) => {
            return resp.data;
          });
      },
    },
    company: {
      type: CompanyType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parentValues, args) {
        console.log(args);
        return axios
          .get(`http://localhost:5000/api/companies/${args.id}`)
          .then((resp) => {
            return resp.data;
          });
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        firstName: {
          type: new GraphQLNonNull(GraphQLString),
        },
        age: {
          type: new GraphQLNonNull(GraphQLInt),
        },
        companyId: {
          type: GraphQLString,
        },
      },
      resolve(pv, args) {
        console.log(args);
        return axios
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
      args: { id: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(pv, args) {
        return axios
          .delete(`http://localhost:5000/api/users/${args.id}`)
          .then((resp) => {
            return resp.data;
          });
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: mutation,
});
