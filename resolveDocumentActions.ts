import defaultResolve from 'part:@sanity/base/document-actions'

import { HelloWorldAction } from './action/ComputeFieldsAction'

export default function resolveDocumentActions(props) {
    return [...defaultResolve(props), HelloWorldAction]
}

