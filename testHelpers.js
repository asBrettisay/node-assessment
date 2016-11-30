const Faker = require('faker');

module.exports = {
    isNumber(test) {
        return typeof parseInt(test) === 'number';
    },
    fakeUser() {
        let languages = ['english', 'french', 'spanish', 'klingon'];
        let types = ['admin', 'moderator', 'user'];
        let faves = ['cats', 'dogs', 'angular'];
        function getRand(l) {
            return Math.floor(Math.random() * l);
        }
        return {
            first_name: Faker.name.firstName(),
            last_name: Faker.name.lastName(),
            email: Faker.internet.email(),
            gender: Math.random() >= .5 ? "Male" : "Female",
            language: languages[getRand(languages.length)],
            age: Math.floor(Math.random() * 70) + 20,
            city: Faker.address.city(),
            state: Faker.address.state(),
            type: types[getRand(types.length)],
            favorites: faves[getRand(faves.length)]
        }
    }
}