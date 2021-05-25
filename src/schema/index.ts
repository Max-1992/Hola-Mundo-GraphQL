import { makeExecutableSchema } from "@graphql-tools/schema";
import { GraphQLSchema } from "graphql";

// Permite importar ficheros .graphql
import 'graphql-import-node'
import typeDefs from './schema.graphql'

// Resolvers
import resolvers from '../resolvers/resolvermap'

const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers })

export default schema