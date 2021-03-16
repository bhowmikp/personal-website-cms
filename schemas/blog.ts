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
            validation: (Rule) => Rule.required().min(10, 'Too short').max(140, 'Too long'),
        },
        {
            name: "description",
            title: "Short Description",
            description: "This shows in the blogs page",
            type: "string",
            validation: (Rule) => Rule.required().min(10, 'Too short').max(140, 'Too long'),
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
            title: 'Inital Pusblish Date',
            name: 'initialPublishDate',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
                calendarTodayLabel: 'Today'
            },
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Edited date',
            name: 'editedDate',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
                calendarTodayLabel: 'Today'
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'body',
            title: 'Blog',
            type: 'richText',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'interestingArticles',
            title: 'Interesting Articles',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'references',
            title: 'References',
            type: 'array',
            of: [{ type: 'string' }],
        },
    ]
}