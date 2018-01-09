## How to use this scaffold

### Important: Do not clone this repo directly into your new project
#### Also, don't forget to replace this readme.md with a readme for your actual project.

#### This node.js based project scaffold and dev toolchain is very much a WIP and to be honest is mostly for me, but feel free to use it! But yours is probably better... It consists of:

* Webpack-Dev-Server (see config/ for webpack configuration)
* ESLint with lightly customized rules configuration (see config/ for rule-set)
* Babel with preset 'env' (based on babel-preset-env)
* LESS (but switching to Sass soon, because wth why am I using the Lesser one? \#PunIntended)
* Mocha + Chai for the assertion library - but, may slim down and only use mocha + node's built in assert library. We'll see... 
    * the tests don't actually test anything.. they will as soon as I figure out what it means to unit test client side DOM focused modules.. 
* jQuery, exposed as project global (i.e. can be used in any module without being required or imported) using Webpack's ProvidePlugin plugin, because I'm stuck in 2013. This will be probably be removed as soon as I optimize jQuery out of the 'workBenchContainer' component, so be warned...
* JSON-Server to mock simple APIs (I love this thing, seriously. Also, I'm so easy to impress, seriously. Also, I haven't configured this at all other than to include it in the project and in the scripts list. But after struggling with CORS issues in a local environment for what seemed like decades but was probably hours, this thing is heavenly.)
    * a db.json source file contains a few pieces of data, designed to mock company locations and users
* A few modules, mostly placeholders
    * The component 'workbench container' includes the top menu, the transition code for scrolling and parallax, and returns the name of the target 'root' div for you to start building your application. The stylesheet for it is a bit of a mess, and like cleaning up a junk drawer, it is on my to-do list to clean it up. 

#### Global dependencies
Node and NPM can be installed by installing [Node and NPM](https://nodejs.org/en/).

All global package dependencies can be installed using <code>npm install -g</code>. I have no idea if the versions are really that important to this scaffold, so ya know... 

* node.js (6.11.0)
    * needed to run everything
* npm (5.6.0)
    * also needed for everything in this non-browser world
* webpack (3.6.0)
    * needed to run <code>npm run build</code>
* webpack-dev-server (2.9.1)
    * needed to run <code>npm run start</code>
* mocha (4.0.1)
    * needed to run <code>npm run test</code>

#### How to set up

1. Clone this repo to a separate location in your code directory, eg. 'code\scaffold'
2. Copy the entire root, as-is, into your new project empty project directory
3. After the copy, delete the .git file from the new project directory - this is the main reason not to clone this directly, as doing so may mess with your new project repo
4. Open [package.json](https://github.com/moabs81/scaffold2/blob/master/package.json) and update it with your project title, version, description, and author. NOTE: IF YOU WOULD LIKE TO USE REACT WITH THIS SCAFFOLD, SEE THE BELOW SECTION TITLED 'NOTES ABOUT REACT' AND BE WARNED - IT'S A MESS...
5. Now run <code>npm i</code> or <code>yarn install</code> to install the scaffold.  Is there a more elegant way to do this? Yes, it's called [Yeoman](http://yeoman.io/learning/) and someday I'll figure that out :) 

#### How to run

This toolset uses npm scripts and a chain of Webpack plug-ins and loaders rather than a task runner like gulp or grunt. See 'package.json' for the NPM scripts used to run the dev environment. As a first troubleshooting step, see the above list of globals if you have problems running the scripts. 

* To run the dev server, use <code>npm run dev</code> and navigate to http://localhost:4000
* To run the fake API, use <code>npm run API</code>. The base URL of the API is http://localhost:3000
* To run both the dev server and fake API and automatically open your computer's default browser to the dev URL, use <code>npm run start</code>
* To run the test suite, use <code>npm run test</code>. Obviously, make sure you have, like, tests first    
* Before building the project, use <code>npm run clean dist</code> to delete the contents of the dist/ directory prior to bundling into it
* To build this project, use <code>npm run build</code> - I need to fix this config though, so it may not work right now
* If you have built this project, run <code>npm run serve</code> and navigate to http://localhost:5000 to use JSON-Server to serve the build locally

#### Notes about React

Buried innocuously within the config directory of this scaffold is a snippets file called [additionalConfig.txt](https://github.com/moabs81/scaffold2/blob/master/config/additionalConfig.txt). (Sidebar - I have a bad habit with scratchpad type files. I love a good [junk drawer](https://www.npr.org/sections/theprotojournalist/2014/08/15/337759135/what-your-junk-drawer-reveals-about-you), and ever-growing scratchpad type files are no exception.) It is my <i>really hacky</i> way of modifying this project to be a [React](https://github.com/facebook/react) based project because by the time I discovered the excellent [create-react-app](https://github.com/facebookincubator/create-react-app) I'd already invested so much time into this little project that I wanted to incorporate React into my toolchain and build rather than ditch it all for that one. I am willing to tolerate this mess for myself for the time being, so for now and until I either separate the two dev scaffolds or create a more elegant way of doing it for myself, follow these steps to include React in the project. NOTE: ALL OF THESE STEPS WILL BE COMPLETED BEFORE THE SET UP STEP FIVE NOTED ABOVE. 

1. In your new project's [package.json](https://github.com/moabs81/scaffold2/blob/master/package.json), add the additionally listed dependencies (note there is a dev set and a prod set). These include React 16 along with React-dom and prop-types, Babel's React preset, eslint plugins to handle React and JSX, and packages for testing React components using [Enzyme](https://github.com/airbnb/enzyme) with [Chai](https://github.com/producthunt/chai-enzyme).

2. Add 'react' to your [.babelrc](https://github.com/moabs81/scaffold2/blob/master/.babelrc) as shown in that snippet. 

3. Add the parserOptions and 'react' plugin to your [.eslintrc](https://github.com/moabs81/scaffold2/blob/master/config/.eslintrc) as shown in that snippet.

4. As noted above, dependencies for component testing with Enzyme using the existing Mocha + Chai test engine/assertion library have been included. If you wish to create component tests, then do the following:
    * In your new project's package.json, replace the script 'test' with the one noted in that snippet. This is done to add the custom no-css compiler to Mocha. If this is not done, Mocha (Using Chai + Enzyme, see below) will throw syntax errors for any .less stylesheets imported into React components under test. 
    * In your project's [config directory](https://github.com/moabs81/scaffold2/tree/master/config), create a new .js file called mochaNoLess.js which contains the contents of that snippet. This simple function will essentially cause Mocha to ignore any imported .less files, thus avoiding any of the otherwise anticipated syntax errors. This is not a robust configuration, but can be made more so with the addition of more extensions (.css, .scss, etc) if required. 
    * Use the test imports snippets as a guide to boilerplate React component testing. See [Enzyme's readme](https://github.com/airbnb/enzyme) for additional insights into testing with Enzyme. 

#### My ambitions

- [ ] I am still learning how to organize actual code, so right now this scaffold doesn't include any directories for code past the src/components level. In fact, to call it a scaffold at all is probably pretty generous/incorrect, it's really little more than a directory structure and an install file... At some point I might create more structure.
- [ ] I need to incorporate node environment variables and create a production bundler with URL updates, etc.
- [ ] My lint --> test --> clean --> build task flow could be cleaner or more automated, probably.
- [ ] I really only have a hazy view of what I want to do with this, but I want to write a test suite to validate this template upon install. probably validate some env vars, path builds, do a few dependency checks, etc... 
- [ ] For us [VSCode](https://code.visualstudio.com/) fans, I need to create a VSCode config file to default .js files to language mode - React. Otherwise, if you forget to do this manually, the first time you hit save on a new React project, you will cry. 
- [ ] Because there are global dependencies, I eventually intend to set this environment up in [containers](https://www.docker.com/) so as to reduce the required host dependencies to only Docker, just as a can-I-do-this exercise.
- [ ] I also intend to use a scaffolding tool like [Yeoman](http://yeoman.io/learning/) to do this entire process more gracefully at some point. In addition to that being a more efficient process overall, the 'React' manual additions make it the process painful. More to come... 