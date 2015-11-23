var store = require('./store');
var middlewares = require('./good-middlewares');

function applyMiddlewares (store, middlewares) {
  middlewares.reverse();
  var dispatch = store.dispatch;

  middlewares.forEach(function (middleware) {
    dispatch = middleware(store, dispatch);
  });

  return Object.assign({}, store, {dispatch: dispatch});
}

// test by running
console.log('Calling Original Store\'s dispatch with \'Benzene\' action...');
store.dispatch('Benzene');

console.log('==========================================================');

var newStore = applyMiddlewares(store, middlewares); // why curry Dan?
console.log('Calling new Store\'s dispatch with \'Benzene\' action...');
newStore.dispatch('Benzene');
