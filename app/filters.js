export const filters = [
    {
        id: 1,
        name: 'Цена',
        // Фильтр интервального выбора
        type: 'number',
        values: [{
            // Выбранное значение
            id: 'choose',
            min: '',
            max: '100',
        }, {
            // Найденный интервал
            id: 'found',
            min: '10',
            max: '200',
        }]
    },
    {
        id: 2,
        name: 'Производитель',
        // Фильтр множественного выбора
        type: 'multiple',
        values: [{
            id: 1,
            name: 'Apple',
            checked: true,
            // Количество найденных предложений с этим фильтром
            found: 10,
        }, {
            id: 2,
            name: 'Lenovo',
            found: 5,
        }, {
            id: 3,
            name: 'Microsoft',
            found: 0,
        }]
    },
    {
        id: 3,
        name: '3G',
        // Фильтр. Да/не важно
        type: 'boolean',
        values: [{
            id: 1,
            found: 4,
        }],
    },
    {
        id: 4,
        name: 'Количество симкарт',
        // Фильтр единственного выбора
        type: 'single',
        values: [{
            id: 1,
            value: 1,
            found: 15,
        }, {
            id: 2,
            value: 2,
            found: 20,
        }],
    },
];
