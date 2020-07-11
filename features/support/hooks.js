require('chromedriver');
const {After, Before} = require('cucumber');
const fs = require('fs');
const path = require('path');
const sanitize = require("sanitize-filename");
const World = require('../support/world');

function defineSupportCode(finished, testCase, callback) {

    "use strict";
    if (!finished) {
        World.start();
    }
    if (callback) {
        callback();
    }
}
const after = defineSupportCode.bind(this, true);

const before = defineSupportCode.bind(this, false);

Before(before);
After(after);
After(() => World.end());


