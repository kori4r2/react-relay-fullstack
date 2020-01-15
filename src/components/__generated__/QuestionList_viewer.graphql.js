/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type QuestionPreview_question$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type QuestionList_viewer$ref: FragmentReference;
declare export opaque type QuestionList_viewer$fragmentType: QuestionList_viewer$ref;
export type QuestionList_viewer = {|
  +allQuestions: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +$fragmentRefs: QuestionPreview_question$ref
      |}
    |}>
  |},
  +$refType: QuestionList_viewer$ref,
|};
export type QuestionList_viewer$data = QuestionList_viewer;
export type QuestionList_viewer$key = {
  +$data?: QuestionList_viewer$data,
  +$fragmentRefs: QuestionList_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "QuestionList_viewer",
  "type": "Viewer",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "backward",
        "path": [
          "allQuestions"
        ]
      }
    ]
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "allQuestions",
      "name": "__QuestionList_allQuestions_connection",
      "storageKey": null,
      "args": null,
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
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "QuestionPreview_question",
                  "args": null
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b47a88e9c494b9ca877c6c7d08bf605c';
module.exports = node;
