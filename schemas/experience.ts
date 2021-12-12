export default {
    name: "experience",
    title: "Experience",
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
            title: 'Paragraphs',
            name: 'paragraphs',
            type: 'array',
            of: [{
                title: 'Paragraph',
                name: 'paragraph',
                type: 'object',
                fields: [
                    {
                        name: 'paragraphHeading', type: 'string', title: 'Paragraph Heading', validation: (Rule) => Rule.required()
                    },
                    {
                        name: 'paragraphTitle', type: 'string', title: 'Paragraph Title', validation: (Rule) => Rule.required()
                    },
                    {
                        name: 'paragraphDescription', type: 'richText', title: 'Paragraph Description', validation: (Rule) => Rule.required()
                    },
                    {name: 'image', title: 'Image', type: 'figureFill'},
                    {
                        name: 'cta',
                        title: 'Cta',
                        type: 'array',
                        of: [{type: 'urlLinkText'}]
                    }
                ]
            }]
        }
    ],
    initialValue : {
        title: 'Experience'
    }
}