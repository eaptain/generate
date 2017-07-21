import {GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import {DemoSubType} from "./demosub";

export const DemoType = new GraphQLObjectType({
    name: 'DemoType',
    description: 'DemoType',
    fields: {
        demo1: {
            type: new GraphQLNonNull(GraphQLString)
        },
        subs: {
            type: new GraphQLList(DemoSubType),
            args: {
                pn: {
                    type: GraphQLInt,
                    defaultValue: 1,
                    description: '页码'
                },
                ps: {
                    type: GraphQLInt,
                    defaultValue: 5,
                    description: '一页展示多少'
                }
            },
            resolve(root, {pn, ps}) {
                const array = [];
                for (let i = 0; i < ps; i++) {
                    array.push({subName: `${pn}:${i}`})
                }
                return array;
            }
        }
    }
});