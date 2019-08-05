export const authors = [
    { id: 1, firstName: 'Tom', lastName: 'Coleman' },
    { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
    { id: 3, firstName: 'Mikhail', lastName: 'Novikov' },
];

export const posts = [
    { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
    { id: 2, authorId: 2, title: 'Welcome to Meteor', votes: 3 },
    { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
    { id: 4, authorId: 3, title: 'Launchpad is Cool', votes: 7 },
];

export const masterRuleContent = {
    smooth: 1,
    weeklyDemandFactors: [52, 13, 6],
    thresholds: [1, 2, 3],
};

export const ruleDetailContent = {
    ruleItems: [1, 2, 3, 4, 5],
    ruleStores: [7, 8, 9, 18, 19],
    ruleID: '1',
    smooth: 1,
    weeklyDemandFactors: [52, 13, 6],
    thresholds: [1, 2, 3],
};

export const ruleContent = {
    ruleItems: [
        1,
        2,
        3,
        4,
        5,
        67,
        78,
        89,
        23,
        32,
        56,
        45454,
        56565,
        676766,
        78787,
        123,
        1234,
        12356,
        124347657,
        5656734523423456567567,
    ],
    ruleStores: [7, 8, 9, 18, 19],
    ruleDetail: masterRuleContent,
};

export const majors = [
    { name: 'Taco', id: 1 },
    { name: 'cheeseburger', id: 2 },
    { name: 'doublecheeseburger', id: 3 },
    { name: 'red', id: 4 },
    { name: 'white', id: 5 },
    { name: 'cheese taco', id: 6 },
    { name: 'cheetos taco belgrande', id: 7 },
];

export const rules = [
    {
        ruleID: '1',
        description: 'tacos are great',
        major: {
            name: 'Rainbow Taco',
            id: 5,
        },

        minor: {
            majorID: 5,
            minorID: 1,
            name: 'one',
            description: 'one',
        },

        item: {
            itemID: 1,
        },
    },
    {
        ruleID: '2',
        description: 'tacos are bad',
        major: {
            name: 'Bad Taco',
            id: 6,
        },

        minor: {
            majorID: 6,
            minorID: 2,
            name: 'two',
            description: 'two',
        },

        item: {
            itemID: 2,
        },
    },
];
