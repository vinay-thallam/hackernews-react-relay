/**
 * @flow
 * @relayHash a41e27b1495aec21592c2c8b2ea80ea3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateLinkInput = {
  description: string,
  url: string,
  postedById?: ?string,
  votesIds?: ?$ReadOnlyArray<string>,
  votes?: ?$ReadOnlyArray<LinkvotesVote>,
  clientMutationId: string,
};
export type LinkvotesVote = {
  userId?: ?string
};
export type CreateLinkMutationVariables = {|
  input: CreateLinkInput
|};
export type CreateLinkMutationResponse = {|
  +createLink: ?{|
    +link: ?{|
      +id: string,
      +createdAt: any,
      +url: string,
      +description: string,
    |}
  |}
|};
*/


/*
mutation CreateLinkMutation(
  $input: CreateLinkInput!
) {
  createLink(input: $input) {
    link {
      id
      createdAt
      url
      description
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateLinkInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createLink",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateLinkInput!"
      }
    ],
    "concreteType": "CreateLinkPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "link",
        "storageKey": null,
        "args": null,
        "concreteType": "Link",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "createdAt",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "url",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateLinkMutation",
  "id": null,
  "text": "mutation CreateLinkMutation(\n  $input: CreateLinkInput!\n) {\n  createLink(input: $input) {\n    link {\n      id\n      createdAt\n      url\n      description\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateLinkMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateLinkMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ec2c3b8306191c14a7a6ff0622a5c925';
module.exports = node;
