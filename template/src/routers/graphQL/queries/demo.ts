import {GraphQLFieldConfig, GraphQLNonNull, GraphQLString} from "graphql";
import types from "../types";
import {Config} from '../../config'

export const getDemo: GraphQLFieldConfig<any, any> = {
    type: types.DemoType,
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
        return {
            demo1: `${Config.serviceName} -> ${arg1}:${arg2}`
        }
    }
};