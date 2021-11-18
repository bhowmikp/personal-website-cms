export default {
    name: "recognition",
    title: "Recognition",
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
            title: 'Recognition List Title',
            name: 'recognitionListTitle',
            type: 'string'
        },
        {
            title: 'Awards Table',
            name: 'awards',
            description: "First row is table header (seperate columns using '|')",
            type: 'array',
            of: [{
                title: 'Row',
                name: 'row',
                type: 'string',
            }]
        }
    ],
    initialValue : {
        title: 'Recognition'
    }
}