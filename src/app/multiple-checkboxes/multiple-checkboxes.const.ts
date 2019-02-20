export interface ICheckboxItem {
    id: number,
    text: string,
    isCheck: boolean
}

export const checkItems: ICheckboxItem[] = [
    {
        id: 1,
        text: 'This is an inbox layout.',
        isCheck: false
    },
    {
        id: 2,
        text: 'Check one item',
        isCheck: false
    },
    {
        id: 3,
        text: 'Hold down your Shift key',
        isCheck: false
    },
    {
        id: 4,
        text: 'Check a lower item',
        isCheck: false
    },
    {
        id: 5,
        text: 'Everything in between should also be set to checked',
        isCheck: false
    },
    {
        id: 6,
        text: 'Try to do it without any libraries',
        isCheck: false
    },
    {
        id: 7,
        text: 'Just regular JavaScript',
        isCheck: false
    },
    {
        id: 8,
        text: 'Good Luck!',
        isCheck: false
    },
    {
        id: 9,
        text: 'Don\'t forget to tweet your result!',
        isCheck: false
    }
];