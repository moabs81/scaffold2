'use strict';

import { buildTableComponent } from './components/workBenchContainer/jsModules/workBenchLayout'; //import the wrapper page. parallax baby #ForNoGoodReason
import { demoApp } from './components/application/app'; //import app entry point

buildTableComponent(function(result) { //callback function returns the DOM target for your app   
    const targetDiv = '#' + result,
        demoAppText = demoApp();
    console.log(targetDiv);
    $('#bddAppContainer').append('<p style="color:#838b83; font-family: sans-serif; font-weight: bold;">' + demoAppText + '</p>');
});