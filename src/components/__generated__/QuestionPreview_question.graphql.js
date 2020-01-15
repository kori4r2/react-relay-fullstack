/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type QuestionPreview_question$ref: FragmentReference;
declare export opaque type QuestionPreview_question$fragmentType: QuestionPreview_question$ref;
export type QuestionPreview_question = {|
  +id: string,
  +text: string,
  +$refType: QuestionPreview_question$ref,
|};
export type QuestionPreview_question$data = QuestionPreview_question;
export type QuestionPreview_question$key = {
  +$data?: QuestionPreview_question$data,
  +$fragmentRefs: QuestionPreview_question$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "QuestionPreview_question",
  "type": "Question",
  "metadata": null,
  "argumentDefinitions": [],
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
      "name": "text",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '9801a4145aadae5dd89906b0091bc352';
module.exports = node;
