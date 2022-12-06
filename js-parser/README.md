## Description
The js-parser is a simulation of what the Hyperledger Fabric chaincode parser will be doing.  Chaincode is slower to develop, requires a more complex development environment, and does nto provide a strong debugging environment.  We can simulate what is required in Node.js first, then convert the logic to chaincode.  

The parser has two main calls:

Create - create a new instance of a template.  This is used when a user first wants to instantiate an instance of a process guided by one of the available templates.  The user passes in the templateId and a name for the instance.  The parser will return the display objects for the user's role for the default state of the template as well as the instanceId used to uniquely identify this instance.

Use - use an existing instance.  Any time a user wants to display the current state of a workflow instance or if they have executed one of the actions of the current state, they call the parser with the use command.  For this call the user provide the instanceId, and if they are executing an action it requires the actionId and related data.  The parser checks the action and if it is passed it attempts any transitions associated.  If the transition conditions are met, it will return the new state's display objects otherwise it will return the current state's display objects.

## Installation

```bash
$ npm install
```

You need to provide a .env file with the connection string to a Mongo database instance.

```bash
MONGO_CONNECTIONSTRING=mongodb://100.100.100.100:27016/mosaique
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Swagger interface

There is a swagger interface for the REST APIs

http://YOURLOCALIP:3000/api#/

## Test

To test the parser you should use one of the test templates

Mosaique is [MIT licensed](LICENSE).
