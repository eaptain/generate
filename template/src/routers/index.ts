import {Proxy} from "eaptain-proxy";
import graphQL from './graphQL';

export default function (proxy: Proxy) {
    proxy.use(graphQL.routes());
    proxy.use(graphQL.allowedMethods());
}