export default {
    title: 'Link',
    name: 'urlLinkText',
    type: 'object',
    fields: [
        {
            name: 'urlText', type: 'string', title: 'URL Text'
        },
        {
            name: 'url', type: 'string', title: 'URL'
        },
        {
            name: 'target', type: 'string',
            options: {
                list: [
                    { title: 'Self', value: '_self' },
                    { title: 'Blank', value: '_blank' }
                ],
            },
        },
        {
            name: 'style',
            title: 'Style',
            type: 'string',
            options: {
                list: [
                    {title: 'Regular', value: 'regular-button'},
                    {title: 'Link', value: 'link-button'}
                ]
            }
        }
    ],
    initialValue: {
        style: 'regular',
        target: '_self'
    }
}