const start_date = new Date('1900-01-01');
const stop_date = new Date('2050-01-01');

export const findNewDay = () => {
    const time = start_date.getTime()+(stop_date.getTime()-start_date.getTime())*Math.random();
    const date = new Date(time);
    const dateStr = date.toLocaleDateString("fr")
    const expectedResult = date.getDay();

    return {time, date, dateStr, expectedResult};
};