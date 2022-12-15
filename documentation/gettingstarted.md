# Installing and running the Mosaique Parser

#### Prerequisites:

- Ubuntu Linux 20.04
- Node.js
- NPM
- Nest.js
- Mongo database

To install the Parser, clone the repository to your local machine, move to the parser folder, run npm install, and add a .env file that points to your MondoDB instance.

```
git clone https://github.com/hyperledger-labs/mosaique-decentralized-workflows.git
cd mosaique-decentralized-workflows
npm install
vi .env
```

Example .env

```
MONGO_CONNECTIONSTRING=mongodb://localhost:27016/mosaique
```

Your parser instance is not available at http://localhost:3000 

You can view the Swagger interface at http://localhost:3000/api

#### REST API Calls

| REST Call Endpoint    | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| GET /                 | Check to see if the parser is running.                       |
| GET /template         | Returns a list of all of the templates in the Mongo database in the format <br />[   {     "name": "Test Template",     "id": "6386735ed993e93ebfd30940"   } ] |
| POST /template/create | Adds a new template and returns the ID for the new template.  Templates are specified using a JSON format like:<br />{<br/>  "name": "test",<br/>  "roles": [<br/>    "roleName": "Admin",<br/>    "roleId": "1000"<br/>   ],<br/>  "machines": [<br/>    {}<br/>  ]<br/>} |
| GET /template/:id     | This returns the template JSON data for the ID you put in the address |
| PUT /template/:id     | This updates a template based on the ID in the address bar and the JSON in the body.  Uses same format as create.  Do not put the templateId (_id) in the JSON in the body. |
| GET /parse            | Returns a list of all instances in the format:<br />[   {     "name": "test10",     "id": "638cf9316fb0f1cace225b40",     "state": "100"   },   {     "name": "Voting on things",     "id": "638fb22c2ba472bd8497c9aa",     "state": "100"   } ] |
| POST /parse/create    | Creates a new instance of a template and returns the display objects.  Input:<br />{<br/>  "name": "test",<br/>  "templateId": "6386735ed993e93ebfd30940",<br/>  "userId": "1234",<br/>  "roleId": "1000"<br/>}<br />Returns:<br />{   "message": "Instance has been created successfully",   "display": {     "instanceId": "639b678c7b6ec51f84366a30",     "displayData": [       {         "displayType": "Title",         "displayContent": "Admin opening page",         "actionId": "0"       },       {         "displayType": "text",         "displayContent": "You can open this up for the users.",         "actionId": "0"       },       {         "displayType": "image",         "displayContent": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg",         "actionId": "0"       },       {         "displayType": "button",         "displayContent": "Open page",         "actionId": "105"       }     ]   } } |
| POST /parse/use       | Use a current instance with optional action and get the display objects.  Input:<br />{<br/>  "instanceId": "639b678c7b6ec51f84366a30",<br/>  "actionId": "105",<br/>  "data": "",<br/>  "roleId": "1000"<br/>}<br />returns:<br />{   "message": "Instance has been processed successfully",   "display": {     "instanceId": "639b678c7b6ec51f84366a30",     "displayData": [       {         "displayType": "Title",         "displayContent": "Admin open page",         "actionId": "0"       },       {         "displayType": "text",         "displayContent": "Wait for user to close the page",         "actionId": "0"       }     ]   } } |



# Installing and running the sample Vue.js Renderer

# Installing and running the Visual Editor