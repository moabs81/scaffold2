## How to use this scaffold

### Important: Do not clone this repo directly into your new project

#### This scaffold is very much a WIP. It consists of: 

* Webpack-Dev-Server (see config/ for webpack configuration)
* ESLint with lightly customized rules configuration (see config/ for rule-set)
* Babel with preset 'env'
* LESS (but switching to Sass soon, because wth why am I using the Lesser one? \#PunIntended)
* Global jQuery, because I'm stuck in 2013
* JSON-Server to mock simple APIs (I love this thing, seriously) 

#### How to set up

1. Clone this repo to a separate location in your code directory, eg. 'code\scaffold'
2. Copy the entire root, as-is, into your new project empty project directory
3. After the copy, delete the .git file from the new project directory - this is the main reason not to clone this directly, as doing so may mess with your new project repo. Is there a more elegant way to do this? Yes, it's called Yeoman and someday I'll figure that out :) 
4. Open 'package.json' and update it with your project title, description, and author
5. Now run <code>npm i</code> to install the scaffold

#### How to run

See 'package.json' for the NPM scripts used to run the dev environment

* To run the dev server, use <code>npm run start</code> and navigate to http://localhost:4000
* To run the fake API, use <code>npm run API</code>. The base URL of the API is http://localhost:3000
* Before building the project, use <code>npm run clean dist</code> to delete the contents of the dist/ directory prior to bundling into it
* To build this project, use <code>npm run build</code> - I need to fix this config file though, so it may not work right now