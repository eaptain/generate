
import {GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";

export const DemoSubType = new GraphQLObjectType({
    name: 'DemoSubType',
    description: 'DemoSubType',
    fields:{
        subName:{
            type:new GraphQLNonNull(GraphQLString)
        }
    }
});