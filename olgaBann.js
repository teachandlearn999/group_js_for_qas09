function countDevelopers(list) {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
    if (list[i].continent === 'Europe' && list[i].language === 'JavaScript') {
    count++;
    }
    }
    return count;
    }