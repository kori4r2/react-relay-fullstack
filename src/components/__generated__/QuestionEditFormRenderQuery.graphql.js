/**
 * @flow
 * @relayHash 90051f9a761fa8d7a23294dd31e5fe77
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type QuestionEditForm_question$ref = any;
export type QuestionEditFormRenderQueryVariables = {|
  input: string
|};
export type QuestionEditFormRenderQueryResponse = {|
  +node: ?{|
    +$fragmentRefs: QuestionEditForm_question$ref
  |}
|};
export type QuestionEditFormRenderQuery = {|
  variables: QuestionEditFormRenderQueryVariables,
  response: QuestionEditFormRenderQueryResponse,
|};
*/


/*
query QuestionEditFormRenderQuery(
  $input: ID!
) {
  node(id: $input) {
    __typename
    ...QuestionEditForm_question
    id
  }
}

fragment QuestionEditForm_question on Question {
  id
  text
  correct {
    id
    text
  }
  wrong {
    edges {
      node {
        id
        text
        weight
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "text",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "QuestionEditFormRenderQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "QuestionEditForm_question",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "QuestionEditFormRenderQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "type": "Question",
            "selections": [
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "correct",
                "storageKey": null,
                "args": null,
                "concreteType": "Answer",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/)
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "wrong",
                "storageKey": null,
                "args": null,
                "concreteType": "OptionConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "OptionEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Option",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v3/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "weight",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "QuestionEditFormRenderQuery",
    "id": null,
    "text": "query QuestionEditFormRenderQuery(\n  $input: ID!\n) {\n  node(id: $input) {\n    __typename\n    ...QuestionEditForm_question\n    id\n  }\n}\n\nfragment QuestionEditForm_question on Question {\n  id\n  text\n  correct {\n    id\n    text\n  }\n  wrong {\n    edges {\n      node {\n        id\n        text\n        weight\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ec79694140393814d6047aac92467061';
module.exports = node;
