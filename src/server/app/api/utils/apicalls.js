import config from '../../config';

export const createResult = (data) => {
    return {
        success: true,
        data: data,
    };
}

export const createFailedResult = ({ err, errType }) => {
    return {
        success: false,
        reasonType: errType,
        reason: err,
    };
}

export const extractIp = (req) => {
    let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (ip.indexOf(', ') >= 0) {
        let ip_parts = ip.split(', ');
        if (ip_parts.length == 2 && ip_parts[0] == ip_parts[1]) {
            ip = ip_parts[0];
        }
    }
    return ip;
}

export const bindCall = (callName) => (router, path, code, mapExceptionToFailResult) => {
    (router[callName])(path, async (req, res) => {
        const logContext = { log: config.log };
        const changeLogger = (subLoggerParams) => {
            logContext.log = logContext.log.getSubLogger(subLoggerParams);
        }
        logContext.changeLogger = changeLogger;
        try {
            let ip = extractIp(req);
            if (ip) {
                changeLogger({ ip });
            }
            let result = await code(req.body, { router, path, req, res, logContext });
            await res.json(createResult(result));
        } catch (error) {
            console.log({ error })
            if (mapExceptionToFailResult) {
                error = await mapExceptionToFailResult(error, req.body, { router, path, req, res, logContext });
            }
            await res.json(createFailedResult(error));
        }
    });
};

export const bindGet = bindCall('get');
export const bindPost = bindCall('post');
export const bindPut = bindCall('put');
export const bindDelete = bindCall('delete');
export const bindInsert = bindCall('insert');
