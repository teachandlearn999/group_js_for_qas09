function countDevelopers(list) {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].continent === 'Europe' && list[i].language === 'JavaScript') {
            count++;
        }
    }

    return count;
}

console.log(countDevelopers([
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' },
    { firstName: 'Smith', lastName: 'J.', country: 'USA', continent: 'NorthAmerica', age: 20, language: 'C#' },
    { firstName: 'Doe', lastName: 'B.', country: 'Canada', continent: 'NAm', age: 25, language: 'Java' }
]));
