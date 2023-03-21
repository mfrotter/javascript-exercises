const findTheOldest = function(people) {
    const oldest = people.sort(function(a,b) {
        let nowDate = new Date();

        if(a.yearOfDeath == undefined){
            a.yearOfDeath = nowDate.getFullYear();
            console.log(a.yearOfDeath);
        }

        if(b.yearOfDeath == undefined){
            b.yearOfDeath = nowDate.getFullYear();
            console.log(b.yearOfDeath);
        }

        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
