export default {
    name: "blog",
    title: "Blog",
    type: "document",
    fields: [
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Programming', value: 'programming' },
                    { title: 'Investing', value: 'investing' },
                    { title: 'Miscellaneous', value: 'miscellaneous' }
                ],
                layout: 'radio'
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => [Rule.required(),
            Rule.min(10).warning('Too short'),
            Rule.max(140).warning('Too long'),
            Rule.regex(
                /^.*[^\s]$/,
                {
                    name: "title", // Error message is "Does not match email-pattern"
                    invert: false, // Boolean to allow any value that does NOT match pattern
                }
            ),
            ],
        },
        {
            name: "description",
            title: "Short Description",
            description: "This shows in the blogs page",
            type: "string",
            validation: (Rule) => [Rule.required(), Rule.min(10).warning('Too short'), Rule.max(140).warning('Too long')],
        },
        {
            name: 'readingTime',
            title: "Reading Time",
            type: "number",
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (Rule) => Rule.required().min(1, 'Need one or more').max(5, 'Too many'),
        },
        {
            name: 'body',
            title: 'Blog',
            type: 'richText',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'relatedArticles',
            title: 'Related Articles',
            type: 'array',
            of: [{ type: 'urlLinkText' }],
        },
        {
            name: 'references',
            title: 'References',
            type: 'array',
            of: [{ type: 'urlLinkText' }],
        },
    ]
}