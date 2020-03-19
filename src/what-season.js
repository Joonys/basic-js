module.exports = function getSeason(date) {

  let season = date;

  if (date instanceof Date && !isNaN(date.valueOf()) == false && date != undefined) throw new Error;
  if (date != undefined) { season = date.getMonth(); } else return 'Unable to determine the time of year!';

   const res = 
    (season >= 2 && season < 5) ? 'spring' :
    (season >= 5 && season < 8) ? 'summer' :
    (season >= 8 && season < 11) ? 'autumn':
    'winter';

    return res;
};
