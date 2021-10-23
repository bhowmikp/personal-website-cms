export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            hidden: true
        },
        {
            name: 'header',
            title: 'Header',
            type: 'array',
            validation: (Rule) => Rule.required().max(5, 'Too many'),
            of: [{
                title: 'Header Element',
                name: 'headerElement',
                type: 'object',
                fields: [
                    {
                        name: 'headerText', type: 'string', title: 'Header Text', validation: (Rule) => Rule.required()
                    },
                    {
                        name: 'headerLink', type: 'string', title: 'Header Link', validation: (Rule) => Rule.required()
                    }
                ]
            }]
        },
        {
            name: 'footer',
            title: 'Footer',
            type: 'array',
            validation: (Rule) => Rule.required().max(5, 'Too many'),
            of: [{
                title: 'Footer Element',
                name: 'footerElement',
                type: 'object',
                fields: [
                    {
                        name: 'footerType', type: 'string', title: 'Footer Type', validation: (Rule) => Rule.required()
                    },
                    {
                        name: 'footerText', type: 'string', title: 'Footer Text', validation: (Rule) => Rule.required()
                    },
                    {
                        name: 'footerLink', type: 'string', title: 'Footer Link', validation: (Rule) => Rule.required()
                    }
                ]
            }]
        }
    ],
    initialValue : {
        title: 'Site Settings'
    }
  }