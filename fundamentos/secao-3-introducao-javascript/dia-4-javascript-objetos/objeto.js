let competidor = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: ['golden: 2', 'silver: 3']
};

console.log(competidor.name);
console.log(competidor.lastName);
console.log(competidor.age);
console.log('A jogadora ' + competidor.name + ' ' + competidor.lastName + ' tem ' + competidor.age + ' anos de idade');

competidor.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(competidor.medals);
console.log('A jogadora '  + competidor.name + ' ' + competidor.lastName + ' foi eleita a melhor do mundo por ' + competidor['bestInTheWorld'].length + ' vezes');