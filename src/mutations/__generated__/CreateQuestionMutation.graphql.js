/**
 * @flow
 * @relayHash dc7210f45c572de16b0a2be0bcbeb9fb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateQuestionInput = {|
  text: string,
  correctId?: ?string,
  correct?: ?QuestioncorrectAnswer,
  wrongIds?: ?$ReadOnlyArray<string>,
  wrong?: ?$ReadOnlyArray<QuestionwrongOption>,
  clientMutationId: string,
|};
export type QuestioncorrectAnswer = {|
  text: string
|};
export type QuestionwrongOption = {|
  weight: number,
  text: string,
|};
export type CreateQuestionMutationVariables = {|
  input: CreateQuestionInput
|};
export type CreateQuestionMutationResponse = {|
  +createQuestion: ?{|
    +question: ?{|
      +id: string
    |}
  |}
|};
export type CreateQuestionMutation = {|
  variables: CreateQuestionMutationVariables,
  response: CreateQuestionMutationResponse,
|};
*/


/*
mutation CreateQuestionMutation(
  $input: CreateQuestionInput!
) {
  createQuestion(input: $input) {
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
    "type": "CreateQuestionInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createQuestion",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateQuestionPayload",
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
    "name": "CreateQuestionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateQuestionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateQuestionMutation",
    "id": null,
    "text": "mutation CreateQuestionMutation(\n  $input: CreateQuestionInput!\n) {\n  createQuestion(input: $input) {\n    question {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '463a6353ea026dcfbc717cf8844dba79';
module.exports = node;
