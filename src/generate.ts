#! /usr/bin/env node

import * as yargs from 'yargs'
import * as cpr from 'cpr'
import * as path from 'path'

yargs.command('create', '创建应用', (y) => {
    return y.option('path', {
        alias: 'p',
        describe: '路径',
        type: 'string',
        default: '.'
    })
}, (argv) => {
    // console.log(argv);
    // console.log(process.cwd(),argv.p)
    const toPath = path.join(process.cwd(), argv.p);
    const fromPath = path.join(__dirname, '../template');
    cpr(fromPath, toPath, {
        deleteFirst: true,
        overwrite: true,
        confirm: true
    }, () => {
        console.log('复制完成')
    });
}).help().argv;