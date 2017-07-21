import queries from './queries'

import mutations from './mutations'

import {
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql'


const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {...queries}
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: {...mutations}
    })
});

export default schema;