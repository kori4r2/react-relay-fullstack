/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type QuestionEditForm_question$ref: FragmentReference;
declare export opaque type QuestionEditForm_question$fragmentType: QuestionEditForm_question$ref;
export type QuestionEditForm_question = {|
  +id: string,
  +text: string,
  +correct: {|
    +id: string,
    +text: string,
  |},
  +wrong: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +id: string,
        +text: string,
        +weight: number,
      |}
    |}>
  |},
  +$refType: QuestionEditForm_question$ref,
|};
export type QuestionEditForm_question$data = QuestionEditForm_question;
export type QuestionEditForm_question$key = {
  +$data?: QuestionEditForm_question$data,
  +$fragmentRefs: QuestionEditForm_question$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "text",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "QuestionEditForm_question",
  "type": "Question",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "correct",
      "storageKey": null,
      "args": null,
      "concreteType": "Answer",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        (v1/*: any*/)
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
                (v0/*: any*/),
                (v1/*: any*/),
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '2b7cbbabe9246a904f9ddd49b04b5d9d';
module.exports = node;
