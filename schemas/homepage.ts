export default {
    name: "homepage",
    title: "Homepage",
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
            type: 'object',
            options: {
                collapsible: true,
                collapsed: false,
            },
            fields: [
                {name: 'header', title: 'Header', type: 'string'},
                {name: 'description', title: 'Description', type: 'text'},
                {name: 'profilePic', title: 'Profile Pic', type: 'figure'},
                {
                    name: 'cta',
                    title: 'Cta',
                    type: 'array',
                    of: [{type: 'urlLinkText'}]
                }
            ]
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
                        name: 'paragraphDescription', type: 'text', title: 'Paragraph Description', validation: (Rule) => Rule.required()
                    },
                    {name: 'image', title: 'Image', type: 'figure'},
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
        title: 'Homepage'
    }
}