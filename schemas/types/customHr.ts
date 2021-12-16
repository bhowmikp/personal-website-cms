import CustomHr from '../../components/CustomHr';

export default {
    type: 'object',
    name: 'horizontalRow',
    title: 'Horizontal Row',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: (Rule) => Rule.required(),
            hidden: true,
            initialValue: 'Horizontal Row'
        },
        {
            type: 'string',
            name: 'horizontalRow',
            title: 'Horizontal Row',
            inputComponent: CustomHr
        }
    ]
}