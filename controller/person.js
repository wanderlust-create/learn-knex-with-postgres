// this layer is responsible with getting the request, delegating to service, and communicate errors 
const personService = require('../service/person')
class PersonController {
    async createPerson(req, res) {
        try {
            const id = await  personService.createPerson(req.body)
            res.status(201).json(id)// add more in header maybe 36.00 in vid
        } catch(err) {
            console.error(err)// is not async, do not use 
            res.status(500).json("something went wrong")
        }
    }
} 
module.exports = new PersonController()