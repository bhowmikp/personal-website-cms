export default {
    name: 'ctaBlogs',
    type: 'object',
    options: {
        collapsible: true
    },
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'blog',
            title: 'Blog',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: {type: 'blog'}
                }
            ],
            validation: (Rule) => Rule.max(2)
        },
        {
            name: 'cta',
            title: 'Cta',
            type: 'urlLinkText',
        }
    ]
}