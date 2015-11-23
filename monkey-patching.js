var store = {
  dispatch: function (string) { console.log('Yo mama, ', string); } // just logs :P
};

var middlewares = [
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

function applyMiddlewares (store, middlewares) {
  middlewares.reverse();
  middlewares.forEach(function (middleware) {
    store.dispatch = middleware(store);
  });

  return store;
}

// test by running
console.log('Calling Original Store\'s dispatch with \'Benzene\' action...');
store.dispatch('Benzene');

console.log('==========================================================');

var newStore = applyMiddlewares(store, middlewares);
console.log('Calling changed Store\'s dispatch with \'Benzene\' action: ');
newStore.dispatch('Benzene');
