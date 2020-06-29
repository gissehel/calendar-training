const start_date = new Date('1900-01-01');
const stop_date = new Date('2050-01-01');

/**
 * A date description
 * 
 * @typedef {Object} DateDescription
 * @property {number} time The time value for the date
 * @property {Date} date The date
 * @property {string} dateStr The string reprensentation of date in the desired local
 * @property {number} expectedResult The expected day of week associated to the date
 */

/**
 * Find a new random date
 * 
 * @param {string} lang 
 * @returns {DateDescription}
 */

export const findNewDay = (lang) => {
    const time = start_date.getTime()+(stop_date.getTime()-start_date.getTime())*Math.random();
    const date = new Date(time);
    const dateStr = date.toLocaleDateString(lang)
    const expectedResult = date.getDay();

    return {time, date, dateStr, expectedResult};
};