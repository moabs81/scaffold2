'use strict';

import { buildTableComponent } from './components/workBenchContainer/jsModules/workBenchLayout';
import tile from './components/workBenchContainer/styles/imgs/paint2.jpg';

buildTableComponent();

/*
IF YOU NEED THE TARGET CONTAINER BACK TO START BUILDING THE APP, BIND A CALLBACK TO THE BUILDER
buildTableComponent.call(function(result) {
    console.log(result);
});
*/