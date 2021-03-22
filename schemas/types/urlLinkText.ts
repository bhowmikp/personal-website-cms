export default {
    title: 'Link',
    name: 'urlLinkText',
    type: 'object',
    fields: [
        {
            name: 'urlText', type: 'string', title: 'URL Text', validation: (Rule) => Rule.required()
        },
        {
            name: 'url', type: 'url', title: 'URL', validation: (Rule) => Rule.required()
        },
        {
            name: 'target', type: 'string',
            options: {
                list: [
                    { title: 'self', value: '_self' },
                    { title: 'blank', value: '_blank' }
                ],
                layout: 'radio'
            },
            validation: (Rule) => Rule.required()
        }
    ]
}