export default {
    type: 'object',
    name: 'adBanner',
    title: 'Ad Banner',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: (Rule) => Rule.required(),
            hidden: true,
            initialValue: 'Ad Banner'
        }
    ]
}