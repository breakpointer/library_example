# Library App Example

This is an example Apollo, ReactJs, Graphql App. It is a very simple app that exists to be a template for other apps. The architecture is designed to be "full stack" and also have automated tests to demostrate how they all work at each layer of the stack. 

## Project goals

 - Test all front-end backend and library/module code
 - Have linting on by default with pre-commit git hooks that auto-run and fix errors
 - Look into Lerna and make this project a mono-repo


## Questions remaining


## Running

`npm start` 


## Testing

### Package level

This runs all the tests in the packages
`npm test` 

### Integration

`cd integration_tests`
`npm install`

To build out the integration test environment using docker-compose...

`npm run setup` 

Then to execute the integration tests run
`npm test` 

To bring down the integration env run
`npm run shutdown` 


## Project structure

 - `frontend` folder for the reactjs
 - `backend` folder for the backend apollo
 - `lib` folder for supporting libraries

