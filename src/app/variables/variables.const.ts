export interface IVariable {
    name: string,
    isRange: boolean,
    value: string,
    min?: string,
    max?: string,
    label: string
}

export const variables: IVariable[] = [

    {
        name: 'spacing',
        isRange: true,
        value: '10',
        min: '10',
        max: '200',
        label: 'Spacing:'
    },
    {
        name: 'blur',
        isRange: true,
        value: '10',
        min: '0',
        max: '25',
        label: 'Blur:'
    },
    {
        name: 'base',
        isRange: false,
        value: '#ffc600',
        label: 'Base Color'
    },

];