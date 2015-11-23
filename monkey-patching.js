var store = require('./store');
var middlewares = require('./middlewares');

function monkeyPatching (store, middlewares) {
  middlewares.reverse();
  middlewares.forEach(function (middleware) {
    // we are over-writing store.dispatch, bad.
    store.dispatch = middleware(store);
  });

  return store;
}

// test by running
console.log('Calling Original Store\'s dispatch with \'Benzene\' action...');
store.dispatch('Benzene');

console.log('==========================================================');

var newStore = monkeyPatching(store, middlewares);
console.log('Calling changed Store\'s dispatch with \'Benzene\' action...');
newStore.dispatch('Benzene');
