module.exports = [
  function (store) {
    var nextDispatch = store.dispatch;
    return function (action) {
      // do its own thing, logging
      console.log('Logging Middleware...');
      // call previous dispatch
      nextDispatch(action);
    };
  },
  function (store) {
    var nextDispatch = store.dispatch;
    return function (action) {
      console.log('Another Middleware...');
      nextDispatch(action);
    };
  }
];
