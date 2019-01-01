This is a tutorial from howtographql.com website.

### Setup Backend and datamodel

Install graphcool CLI with npm

`npm install -g graphcool`

Type below command into terminal

`graphcool init --schema https://graphqlbin.com/hn-relay.graphql --name Hackernews`

This will create *project.graphcool* file in the directory where command was ran.

### Populate The Database & GraphQL Playgrounds


Open up a terminal and navigate to the directory where project.graphcool is located. Then execute the following command:

`graphcool playground`

This will fire up a browser window with graphcool playground. Create some links using mutations in that ( Check the schema and run accordinlgy )

### Setup Frontend application.

Run below commands :

`npm install -g create-react-app`

`create-react-app hackernews-react-relay`

Next you should move project.graphcool into the hackernews-react-relay directory to manage everything in one place

Pull in the functionality of Relay into your project by installing below dependencies : 

`npm install react-relay`

`npm install relay-compiler --save-dev`

`npm install babel-plugin-relay --save-dev`

Then eject from create react app so that you can do some custom babel configurations

`npm run eject`

Open package.json and add the relay plugin by modifying the babel section like so

`"babel": {
  "presets": [
    "react-app"
  ],
  "plugins": [
    "relay"
  ]
},`

Create relay environment. (The Relay Environment provides the core of the Relay functionality at runtime by ”[bundling] together the configuration, cache storage, and network-handling that Relay needs in order to operate.”)

To achieve this, create new file in the project’s src directory called Environment.js ( Check the file content in the repo )

Run below command to know the graphql relay endpoint and update the same in Environment.js

`graphcool endpoints`

Before you can start using Relay, you’ll need to download the full GraphQL schema into your project and make it available to the Relay Compiler.
You’ll download the schema using a tool called get-graphql-schema.

`npm install -g get-graphql-schema`

`get-graphql-schema __RELAY_API_ENDPOINT__ > ./schema.graphql`

schema.graphql file needs to be placed in the root directory of your project.

That’s it, We are done with setting up.
