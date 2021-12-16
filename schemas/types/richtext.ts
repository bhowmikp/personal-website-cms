export default {
    name: "richText",
    type: 'array',
    of: [
        {
            type: 'block'
        },
        {
            type: 'figureFill',
            title: 'Figure'
        },
        {
            type: 'code'
        },
        {
            type: 'horizontalRow',
            title: 'Horizontal Row'
        },
        {
            type: 'adBanner',
            title: 'Ad Banner'
        }
    ]
}