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
            title: 'Blog Image',
            name: 'blogImage',
            type: 'figure'
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
            name: 'tableOfContents',
            title: 'Table of Contents',
            type: 'array',
            of: [{
                title: 'Section',
                name: 'section',
                type: 'object',
                fields: [
                    {
                        name: 'sectionName', type: 'string', title: 'Section Name', validation: (Rule) => Rule.required()
                    },
                    {
                        name: 'sectionId', type: 'string', title: 'Section ID', validation: (Rule) => Rule.required()
                    },
                    {
                        name: 'sectionLevel', type: 'number',
                        options: {
                            list: [
                                { title: 'level1', value: 1 },
                                { title: 'level2', value: 2 },
                                { title: 'level3', value: 3 }
                            ],
                            layout: 'radio'
                        },
                        validation: (Rule) => Rule.required()
                    }
                ]
            }]
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