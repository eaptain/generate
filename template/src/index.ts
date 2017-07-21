import {Proxy} from 'eaptain-proxy'
import {Config} from './config'
import router from './routers'
import middleware from './middlewares'
import {getPort} from 'eaptain-getport'

const proxy = new Proxy(Config.serviceName, Config.center);

router(proxy);

middleware(proxy);

getPort(Config.listen.port, Config.listen.host).then((port) => {
    proxy.listen(port, Config.listen.host);
    console.log(`listen at ${Config.listen.host}:${port}`)
});


