'use strict';
var request = require('request');

var config = require('../../config/config')

/**
 * Pika Controller
 * @description Defines the Pika business logic getting the data from the pikaAPIService and returning to the
 * requested environment
 */

exports.index = function (req, res) {

    let urlForAllPokemons = config.pokeAPIURL+'pokemon?limit=1000'

    request.get(urlForAllPokemons, function (err, req, body) {
        if(err){
            res.send('Error !! ', err)
        }
        if(res.statusCode !== 200){
            res.send('Status Code !! ', res.statusCode)
        }
        else {
            console.log('Body ', JSON.parse(body))

            res.setHeader('Content-Type', 'application/json');
            res.end(body);

        }
    })
}
