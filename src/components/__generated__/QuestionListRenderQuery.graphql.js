/**
 * @flow
 * @relayHash 9d3f95fe1678beb17cab4be58327d067
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type QuestionList_viewer$ref = any;
export type QuestionListRenderQueryVariables = {||};
export type QuestionListRenderQueryResponse = {|
  +viewer: {|
    +$fragmentRefs: QuestionList_viewer$ref
  |}
|};
export type QuestionListRenderQuery = {|
  variables: QuestionListRenderQueryVariables,
  response: QuestionListRenderQueryResponse,
|};
*/


/*
query QuestionListRenderQuery {
  viewer {
    ...QuestionList_viewer
    id
  }
}

fragment QuestionList_viewer on Viewer {
  allQuestions(last: 100, orderBy: id_DESC) {
    edges {
      node {
        ...QuestionPreview_question
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

fragment QuestionPreview_question on Question {
  id
  text
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 100
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "id_DESC"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "QuestionListRenderQuery",
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
            "name": "QuestionList_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "QuestionListRenderQuery",
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
            "name": "allQuestions",
            "storageKey": "allQuestions(last:100,orderBy:\"id_DESC\")",
            "args": (v0/*: any*/),
            "concreteType": "QuestionConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "QuestionEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Question",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "text",
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
            "name": "allQuestions",
            "args": (v0/*: any*/),
            "handle": "connection",
            "key": "QuestionList_allQuestions",
            "filters": []
          },
          (v1/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "QuestionListRenderQuery",
    "id": null,
    "text": "query QuestionListRenderQuery {\n  viewer {\n    ...QuestionList_viewer\n    id\n  }\n}\n\nfragment QuestionList_viewer on Viewer {\n  allQuestions(last: 100, orderBy: id_DESC) {\n    edges {\n      node {\n        ...QuestionPreview_question\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasPreviousPage\n      startCursor\n    }\n  }\n}\n\nfragment QuestionPreview_question on Question {\n  id\n  text\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9fd7dbd60933450711fd368e412c4719';
module.exports = node;
