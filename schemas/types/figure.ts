export default {
    name: "figure",
    type: 'object',
    fields: [
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
            name: 'width',
            title: 'Width',
            type: 'number',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'height',
            title: 'Height',
            type: 'number',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'alignment',
            type: 'string',
            title: 'Alignment (left, right, standalone)',
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