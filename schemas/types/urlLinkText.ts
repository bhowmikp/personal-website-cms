export default {
    title: 'Link',
    name: 'urlLinkText',
    type: 'object',
    fields: [
        {
            name: 'urlText', type: 'string', title: 'URL Text', validation: (Rule) => Rule.required()
        },
        {
            name: 'url', type: 'string', title: 'URL', validation: (Rule) => Rule.required()
        },
        {
            name: 'target', type: 'string',
            options: {
                list: [
                    { title: 'Self', value: '_self' },
                    { title: 'Blank', value: '_blank' }
                ],
            },
            validation: (Rule) => Rule.required()
        },
        {
            name: 'style',
            title: 'Style',
            type: 'string',
            options: {
                list: [
                    {title: 'Regular', value: 'regular'},
                    {title: 'Full', value: 'full'}
                ]
            },
            validation: (Rule) => Rule.required()
        }
    ],
    initialValue: {
        style: 'regular',
        target: '_self'
    }
}