/**
 * @flow
 * @relayHash 695fdc9ac4f2187bbf9763288c2f7f18
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateQuestionInput = {|
  text?: ?string,
  id: string,
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
export type UpdateQuestionMutationVariables = {|
  input: UpdateQuestionInput
|};
export type UpdateQuestionMutationResponse = {|
  +updateQuestion: ?{|
    +question: ?{|
      +id: string
    |}
  |}
|};
export type UpdateQuestionMutation = {|
  variables: UpdateQuestionMutationVariables,
  response: UpdateQuestionMutationResponse,
|};
*/


/*
mutation UpdateQuestionMutation(
  $input: UpdateQuestionInput!
) {
  updateQuestion(input: $input) {
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
    "type": "UpdateQuestionInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateQuestion",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateQuestionPayload",
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
    "name": "UpdateQuestionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateQuestionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateQuestionMutation",
    "id": null,
    "text": "mutation UpdateQuestionMutation(\n  $input: UpdateQuestionInput!\n) {\n  updateQuestion(input: $input) {\n    question {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9665c38c52fd0ca376f6e1d61bfbf712';
module.exports = node;
