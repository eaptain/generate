import {Config as developer} from './developer'
import {Config as production} from './production'

const dev = process.env.DEV;

export const Config = (dev === 'production' ? production : developer);