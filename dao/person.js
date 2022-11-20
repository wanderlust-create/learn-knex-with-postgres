// this layer is am abstraction to access database 
const db = require('../db/db')
// should add a try/ catch - right now will threw to service layer 
class PersonDAO {
    async createPerson(firstName, lastName, email) {
        const [id] = await db('person').insert({
            email,
            first_name: firstName,
            last_name: lastName
        }).returning('id')
        return id
    }
}
module.exports = new PersonDAO()