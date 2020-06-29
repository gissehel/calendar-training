import configDao from '../dao/config';

export default (params) => {
    if (configDao.debug) {
        window.exported = { ...(window.exported||{}), ...params };
    }
}
