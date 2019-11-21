const start_date = new Date('2019-01-01');
const stop_date = new Date('2050-01-01');

export const findNewDay = () => {
    const time = start_date.getTime()+(stop_date.getTime()-start_date.getTime())*Math.random();
    const date = new Date(time);
    const dateStr = date.toLocaleDateString()
    const expectedResult = date.getDay();

    return {time, date, dateStr, expectedResult};
};