export default {
    name: "homepage",
    title: "Homepage",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "paragraphOrder",
            title: "Paragraph Order",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'body',
            type: 'richText'
        },
        {
            name: 'figure',
            type: 'figure'
        }
    ]
}