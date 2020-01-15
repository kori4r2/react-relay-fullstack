/**
 * @flow
 * @relayHash 7ed10fd6a8a37d9d26cd1cfb87d787c0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteQuestionInput = {|
  id: string,
  clientMutationId: string,
|};
export type DeleteQuestionMutationVariables = {|
  input: DeleteQuestionInput
|};
export type DeleteQuestionMutationResponse = {|
  +deleteQuestion: ?{|
    +question: ?{|
      +id: string
    |}
  |}
|};
export type DeleteQuestionMutation = {|
  variables: DeleteQuestionMutationVariables,
  response: DeleteQuestionMutationResponse,
|};
*/


/*
mutation DeleteQuestionMutation(
  $input: DeleteQuestionInput!
) {
  deleteQuestion(input: $input) {
    question {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteQuestionInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteQuestion",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteQuestionPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "question",
        "storageKey": null,
        "args": null,
        "concreteType": "Question",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
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
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteQuestionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteQuestionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteQuestionMutation",
    "id": null,
    "text": "mutation DeleteQuestionMutation(\n  $input: DeleteQuestionInput!\n) {\n  deleteQuestion(input: $input) {\n    question {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0c906f8b4c5c9c24ab348328c13910bd';
module.exports = node;
