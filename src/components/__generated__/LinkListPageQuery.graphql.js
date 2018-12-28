/**
 * @flow
 * @relayHash 3103d97a5a8da197e2b0d31e55c0ef63
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LinkList_viewer$ref = any;
export type LinkListPageQueryVariables = {||};
export type LinkListPageQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: LinkList_viewer$ref
  |}
|};
*/


/*
query LinkListPageQuery {
  viewer {
    ...LinkList_viewer
    id
  }
}

fragment LinkList_viewer on Viewer {
  allLinks(last: 100, orderBy: createdAt_DESC) {
    edges {
      node {
        ...Link_link
        id
        __typename
      }
      cursor
    }
    pageInfo {
      hasPreviousPage
      startCursor
    }
  }
}

fragment Link_link on Link {
  id
  description
  url
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "LinkListPageQuery",
  "id": null,
  "text": "query LinkListPageQuery {\n  viewer {\n    ...LinkList_viewer\n    id\n  }\n}\n\nfragment LinkList_viewer on Viewer {\n  allLinks(last: 100, orderBy: createdAt_DESC) {\n    edges {\n      node {\n        ...Link_link\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment Link_link on Link {\n  id\n  description\n  url\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "LinkListPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "LinkList_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LinkListPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allLinks",
            "storageKey": "allLinks(last:100,orderBy:\"createdAt_DESC\")",
            "args": [
              {
                "kind": "Literal",
                "name": "last",
                "value": 100,
                "type": "Int"
              },
              {
                "kind": "Literal",
                "name": "orderBy",
                "value": "createdAt_DESC",
                "type": "LinkOrderBy"
              }
            ],
            "concreteType": "LinkConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "LinkEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Link",
                    "plural": false,
                    "selections": [
                      v0,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "description",
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
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasPreviousPage",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "startCursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "allLinks",
            "args": [
              {
                "kind": "Literal",
                "name": "last",
                "value": 100,
                "type": "Int"
              },
              {
                "kind": "Literal",
                "name": "orderBy",
                "value": "createdAt_DESC",
                "type": "LinkOrderBy"
              }
            ],
            "handle": "connection",
            "key": "LinkList_allLinks",
            "filters": []
          },
          v0
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2c2833bffc47f6918a457dc5fe6b01ca';
module.exports = node;
