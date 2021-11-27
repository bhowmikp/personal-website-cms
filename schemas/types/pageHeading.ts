export default {
    name: 'pageHeading',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: false,
    },
    fields: [
        {name: 'header', title: 'Header', type: 'string'},
        {name: 'description', title: 'Description', type: 'text'},
        {
            name: "pageStepper",
            title: "Page Stepper",
            type: "array",
            of: [{
                title: "Stepper",
                name: "stepper",
                type: "object",
                fields: [
                    {
                        name: "stepperLabel", title: "Stepper Label", type: 'string'
                    },
                    {
                        name: "stepperLink", title: "Stepper Link", type: 'string'
                    }
                ]
            }]
        }
    ]
}