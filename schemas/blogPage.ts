export default {
    name: "blogPage",
    title: "Blog Page",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            hidden: true
        },
        {
            title: 'Heading',
            name: 'heading',
            type: 'pageHeading',
        },
        {
            title: 'Categories',
            name: 'categories',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: "blogHeading",
            title: "Blog Heading",
            type: "string"
        },
        {
            name: 'nextButton',
            title: 'Next Button',
            type: 'string'
        },
        {
            name: 'prevButton',
            title: 'Previous Button',
            type: 'string'
        }
    ],
    initialValue : {
        title: 'Blog Page'
    }
}