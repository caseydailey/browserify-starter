"use strict";

let happy = true;


/**
 * 
 * @param {boolean} argument 
 * @return {boolean} the current value of happy
 */
function getHappy (argument) {
    return happy;
}

function setHappy(value){
    happy = value;
    return happy;
}

module.exports = {getHappy, setHappy};