## How to use this scaffold

### Important: Do not clone this repo directly into your new project

#### This node.js based project scaffold and dev toolchain is very much a WIP and to be honest is mostly for me, but feel free to use it! But yours is probably better... It consists of:

* Webpack-Dev-Server (see config/ for webpack configuration)
* ESLint with lightly customized rules configuration (see config/ for rule-set)
* Babel with preset 'env' (based on babel-preset-env)
* LESS (but switching to Sass soon, because wth why am I using the Lesser one? \#PunIntended)
* Mocha + Chai (using assert because the.expect.chain.is.just.weird.to.me)
    * the tests don't actually test anything... yet #TBD
* jQuery, exposed as project global (i.e. can be used in any module without being required or imported) using webpack's ProvidePlugin plugin, because I'm stuck in 2013.
* JSON-Server to mock simple APIs (I love this thing, seriously)
    * a db.json source file contains a few pieces of data, designed to mock company locations and users
* A few modules, mostly placeholders
    * The component 'workbench container' includes the top menu, the transition code for scrolling and parallax, and returns the name of the target 'root' div for you to start building your application

#### Global dependencies include

* node.js (6.11.0)
* npm (5.6.0)
* webpack (3.6.0)
* webpack-dev-server (2.9.1)
* mocha (4.0.1)

#### How to set up

1. Clone this repo to a separate location in your code directory, eg. 'code\scaffold'
2. Copy the entire root, as-is, into your new project empty project directory
3. After the copy, delete the .git file from the new project directory - this is the main reason not to clone this directly, as doing so may mess with your new project repo
4. Open 'package.json' and update it with your project title, description, and author
5. Now run <code>npm i</code> or <code>yarn install</code> to install the scaffold.  Is there a more elegant way to do this? Yes, it's called Yeoman and someday I'll figure that out :) 

#### How to run

This scaffold uses npm scripts and a chain of webpack plug-ins and loaders rather than a task runner like gulp or grunt. See 'package.json' for the NPM scripts used to run the dev environment

* To run the dev server, use <code>npm run start</code> and navigate to http://localhost:4000
* To run the fake API, use <code>npm run API</code>. The base URL of the API is http://localhost:3000
* To run the test suite, use <code>npm run test</code>. Obviously, make sure you have, like, tests first
* Before building the project, use <code>npm run clean dist</code> to delete the contents of the dist/ directory prior to bundling into it
* To build this project, use <code>npm run build</code> - I need to fix this config file though, so it may not work right now

#### My ambitions

* I am still learning how to organize actual code, so right now this scaffold doesn't include any directories for code past the src/components level. In fact, to call it a scaffold is probably pretty generous... At some point I might create more structure there
* My lint --> test --> build task flow could be cleaner, probably
* Because there are global dependencies, I eventually intend to set this environment up in containers so as to reduce the required host dependencies to only Docker, just as a can-I-do-this exercise
* I also intend to use a scaffolding tool like Yeoman to do this entire process more gracefully at some point