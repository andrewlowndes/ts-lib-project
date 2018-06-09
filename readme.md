# Typescript Library Environment
A minimal library development environment configured to use Typescript, Karma, Jasmine.

## Features
- Code and tests all written and compiled from Typescript
- Builds agnostic code that we can be used in a browser or node environment
- Export type declarations
- Fast dev env

## Commands

### Installing
Call `npm i` to install dependencies.

### Building
Call `npm build` to build the library, starting from the file located at `src/index.ts`, output to `lib/`.

### Running tests
Call `npm test` to run through the full suite of tests in one run.

### Testing (debug)
Call `npm run test-debug` to start a Karma server for continuous testing whilst coding (watch changes).

### Testing (coverage)
Call `npm run coverage` to view the html docs of the coverage report (a coverage xml file and html docs are automatically generated after running the tests).

## How to

### Adding code
The entry file for compiling and running the Typescript is 'src/index.ts'. Add your own code by creating a file with the '.ts' extension in the src directory (or subdirectory).

### Writing tests
Add your tests to the src directory (or subdirectory) with the file extension '.spec.ts'.

### Add 3rd party libraries
Install the library via `npm i {libraryName}`

e.g. `npm i jquery`, `npm i rxjs`


Start using the library via ES6 import:

e.g. 
```javascript
import * as jquery from 'jquery';
```
```javascript
import { Subject } from 'rxjs';
```

### How to include in a browser project
If you include this library via npm, you can add to the generated umd js file to the module resolution being used.

e.g a systemjs config would contain for the following if the library name was 'ts-lib-project':
```javascript
System.config({
  paths: {
    'npm:': 'node_modules/'
  },
  map: {
    'ts-lib-project': 'npm:ts-lib-project/lib/ts-lib-project.umd.js' //can use the min file for debugging the 3rd party library
  }
});
```

If using a bundler like webpack, it would automatically extract the correct code into the bundle served to the browser via imports. However to exclude the library from being bundled into the generated min file, add the dependency to the `webpack.config.js` file in the externals property.

e.g. where `import moment from 'moment';` would be used for the 3rd party library 'momentjs', excluding this from the min bundle requires:
```javascript
{
  externals: {
    moment: 'moment'
  }
}
```

## Licence
All code is licenced under MIT.
