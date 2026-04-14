require('datejs');
// function to combine users from multiple sources into a single object
function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  for (let i = 0; i < args.length; i++) {
    combinedObject.users = [
      ...combinedObject.users,
      ...args[i]
    ];
  }

  combinedObject.merge_date = new Date().toString("M/d/yyyy");

  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};