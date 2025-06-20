const findTheOldest = function(people) {
    people.sort((personA, personB) => {
        const currentYear = new Date().getFullYear();
        personA.yearOfDeath = personA.yearOfDeath ? personA.yearOfDeath : currentYear;
        personB.yearOfDeath = personB.yearOfDeath ? personB.yearOfDeath : currentYear;
        let personAAge = personA.yearOfDeath - personA.yearOfBirth;
        let personBAge = personB.yearOfDeath - personB.yearOfBirth;
        return personBAge - personAAge;
    })
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
