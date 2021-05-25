import { IResolvers } from "@graphql-tools/utils";

// Query Resolvers
import query from './query'

const resolvers: IResolvers = {
    ...query
}

export default resolvers