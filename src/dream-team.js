module.exports = function createDreamTeam(members) {

  if (!Array.isArray(members)) {
      return false;
  }

  return members.reduce((res, item) => {
      if (typeof item == 'string') {
          res.push(/[a-zA-Z]/g.exec(item)[0].toUpperCase());
      }
      return res;
  }, []).sort().join('');
};