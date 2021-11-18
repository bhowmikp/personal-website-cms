export default {
    name: "archive",
    title: "Archive",
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
            title: 'Archive List Title',
            name: 'archiveListTitle',
            type: 'string'
        },
        {
            title: 'Archives',
            name: 'archives',
            type: 'array',
            of: [{
                title: 'Archive',
                name: 'archive',
                type: 'object',
                fields: [
                    {
                        name: 'archiveLabel', type: 'string', title: 'Archive Label', validation: (Rule) => Rule.required()
                    },
                    {
                        name: 'archiveLink', type: 'string', title: 'Archive Link', validation: (Rule) => Rule.required()
                    }
                ]
            }]
        }
    ],
    initialValue : {
        title: 'Archive'
    }
}