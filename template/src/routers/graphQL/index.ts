import * as koaRouter from 'koa-router';
import {graphqlKoa, graphiqlKoa} from 'apollo-server-koa';

import schema from './schema';


const router = new koaRouter();

router.get('/graphQL', graphiqlKoa({endpointURL: "/graphQL"}));

router.post('/graphQL', graphqlKoa({schema}));

export default router;