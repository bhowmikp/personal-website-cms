export default {
    name: "aboutMe",
    title: "About Me",
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
            title: 'Paragraph Title',
            name: 'paragraphTitle',
            type: 'string'
        },
        {
            title: 'Paragraph Desctiption',
            name: 'paragraphDescription',
            type: 'richText'
        }
    ],
    initialValue : {
        title: 'About Me'
    }
}