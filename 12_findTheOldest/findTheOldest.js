const findTheOldest = function(people) {
    const oldestPerson = people.reduce((oldest, current) => {
        const currentYear = new Date().getFullYear();
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        const currentAge = (current.yearOfDeath || currentYear) - current.yearOfBirth;
        return oldestAge < currentAge ? current : oldest;   
    }, people[0]);
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
