export interface IProject {
    title: string,
    description: string,
    preview: string,
    routerLink: string
}

export const ALL_PROJECTS: IProject[] = [
    {
        title: 'Драм-машина',
        description: 'Драм-машина просто написанная на Javascript',
        preview: 'prev-drum.png',
        routerLink: '/drum'
    },
    {
        title: 'Холст',
        description: 'Холст на котором можно рисовать радугой',
        preview: 'placeholder.jpg',
        routerLink: '/canvas'
    },
    {
        title: 'Часы',
        description: 'Нарисованные часы, показывающие актуальное время',
        preview: 'placeholder.jpg',
        routerLink: '/clock'
    },
    {
        title: 'Flex',
        description: 'Интерактивные панели',
        preview: 'placeholder.jpg',
        routerLink: '/flex'
    },
    {
        title: 'Особая сортировка',
        description: 'Сортировка названий групп, которая не учитывает артиклей',
        preview: 'placeholder.jpg',
        routerLink: '/sort-without-article'
    },
    {
        title: 'Выделение чекбоксов',
        description: 'С помощью кнопки Shift можно выделить сразу несколько чекбоксов',
        preview: 'placeholder.jpg',
        routerLink: '/multiple-checkboxes'
    }
];