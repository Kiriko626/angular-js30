export interface IPanel {
    top: string;
    id: number;
    middle: string;
    bottom: string;
    isOpen: boolean;
}

export const panels: IPanel[] = [
    {
        top: 'Hey',
        id: 1,
        middle: 'Let\'s',
        bottom: 'Dance',
        isOpen: false
    },
    {
        top: 'Give',
        id: 2,
        middle: 'Take',
        bottom: 'Receive',
        isOpen: false
    },
    {
        top: 'Experience',
        id: 3,
        middle: 'It',
        bottom: 'Today',
        isOpen: false
    },
    {
        top: 'Give',
        id: 4,
        middle: 'All',
        bottom: 'You can',
        isOpen: false
    },
    {
        top: 'Life',
        id: 5,
        middle: 'In',
        bottom: 'Motion',
        isOpen: false
    }
];