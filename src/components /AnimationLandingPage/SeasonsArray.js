const d = new Date();
const seasonArray = [
    {name: 'Spring', date: new Date(d.getFullYear(), 2, (d.getFullYear() % 4 === 0) ? 19 : 20).getTime()},
    {name: 'Summer', date: new Date(d.getFullYear(), 5, (d.getFullYear() % 4 === 0) ? 20 : 21).getTime()},
    {name: 'Autumn', date: new Date(d.getFullYear(), 8, (d.getFullYear() % 4 === 0) ? 22 : 23).getTime()},
    {name: 'Winter', date: new Date(d.getFullYear(), 11, (d.getFullYear() % 4 === 0) ? 20 : 21).getTime()}
];