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
            title: 'Alternative text'
        },
        {
            name: 'caption',
            type: 'string',
            title: 'Caption'
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