module.exports = [
  function (store, next) {
    return function (action) {
      // do its own thing, logging
      console.log('Logging Middleware...');
      // call previous dispatch
      next(action);
    };
  },
  function (store, next) {
    return function (action) {
      console.log('Another Middleware...');
      next(action);
    };
  }
];
