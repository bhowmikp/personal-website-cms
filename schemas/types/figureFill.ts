export default {
    name: "figureFill",
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'caption',
            type: 'string',
            title: 'Caption'
        },
        {
            name: 'alignment',
            type: 'string',
            title: 'Alignment',
            options: {
                list: [
                    { title: 'left', value: 'left' },
                    { title: 'right', value: 'right' },
                    { title: 'standalone', value: 'standalone' }
                ],
                layout: 'radio'
            },
            validation: (Rule) =>
                Rule.regex(
                    /left|right|standalone/,
                    {
                        name: "alignment",
                        invert: false,
                    }
                ),
        }
    ]
}