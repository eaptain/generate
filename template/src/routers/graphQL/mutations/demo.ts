import {GraphQLFieldConfig, GraphQLNonNull, GraphQLString} from "graphql";

export const updateDemo: GraphQLFieldConfig<any, any> = {
    type: GraphQLString,
    args: {
        arg1: {
            type: new GraphQLNonNull(GraphQLString),
            description: '不可为空arg1'
        },
        arg2: {
            type: new GraphQLNonNull(GraphQLString),
            description: '不可为空arg2'
        }
    },
    resolve(root, {arg1, arg2}) {
        return JSON.stringify({arg1, arg2});
    }
};