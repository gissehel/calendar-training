import { Router } from 'express';
import { sleep } from '../../../common/utils/time';
import { bindPost } from './utils/apicalls';

export const apiRouter = Router();

bindPost(apiRouter, '/messageBox/getData', async ({ sessionid }, { logContext }) => {
    const log = logContext.log;
    let values = [...Array(5)].map(() => Math.floor(Math.random() * 5));
    log.debug(`Getting /messageBox/getData call => ${JSON.stringify(values)}`);
    await sleep(1000);
    return { values };
});
