import defaultResolve from 'part:@sanity/base/document-actions'

import { ComputeAction } from './action/ComputeFieldsAction'

export default function resolveDocumentActions(props) {
    return [...defaultResolve(props), ComputeAction]
}

