const personDAO = require('../dao/person')
// no error handeling - SHOULD create error handeling here 
class PersonService {
    createPerson(personDto) {
        const { firstName, lastName, email } = personDto
        return personDAO.createPerson(firstName, lastName, email)
    }
}

module.exports = new PersonService()