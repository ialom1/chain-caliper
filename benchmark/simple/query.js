'use strict';

module.exports.info  = 'querying accounts';


let bc, contx;
let account_array;
module.exports.init = function(blockchain, context, args) {
    const open = require('./open.js');
    bc       = blockchain;
    contx    = context;
    // account_array = open.account_array;
    account_array = [
      {chaincodeId: 'fabcar', fcn: 'queryCar', args: ['CAR1']},
      {chaincodeId: 'fabcar', fcn: 'queryCar', args: ['CAR2']},
      {chaincodeId: 'fabcar', fcn: 'queryCar', args: ['CAR4']},
      {chaincodeId: 'fabcar', fcn: 'queryCar', args: ['CAR6']},
      {chaincodeId: 'fabcar', fcn: 'queryCar', args: ['CAR8']},
      {chaincodeId: 'fabcar', fcn: 'queryAllCars', args: []}
    ];
    return Promise.resolve();
};

module.exports.run = function() {
    const acc  = account_array[Math.floor(Math.random()*(account_array.length))];
    //console.log('*** from query', acc)
    return bc.queryState(contx, 'fabcar', 'v1', acc.args, acc.fcn);
};

module.exports.end = function() {
    // do nothing
    return Promise.resolve();
};
