require('chromedriver');
const {After, Before} = require('cucumber');
const fs = require('fs');
const path = require('path');
const sanitize = require("sanitize-filename");
const World = require('../support/world');

function defineSupportCode(finished, testCase, callback) {

    "use strict";
    // After(function(scenarioResult) {
    //     if(scenarioResult.isFailed()) {
    //         this.driver.takeScreenshot().then(function(data){
    //             const base64Data = data.replace(/^data:image\/png;base64,/,"");
    //             fs.writeFile(path.join('screenshots', sanitize(scenarioResult.scenario.name + ".png").replace(/ /g,"_")), base64Data, 'base64', function(err) {
    //                 if(err) console.log(err);
    //             });
    //         });
    //     }
    //     return this.driver.quit();
    // });

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


