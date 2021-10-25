const {object, string} = require ('yup');
const User = require ('../models/User');

module.exports = {
    async create (request, response) {
       const schema = object().shape({
           name: string().required(),
           email: string().email().required(),
           password: string().required().min(6)
       }); 
       if (!(await schema.isValid(request.body))){
           return response.status(400).json({error: 'Validation fails.'})
       }
       
       
       const validEmail = request.body.email; 
       const withEmailUsers = await User.findAll({
        where: {
          email:validEmail
        }
      });

       if (!(withEmailUsers.length  == 0)){
           return response.status(400).json({error: 'User já cadastrado.'})
       } 

         const {id, name, email, password} = await User.create(request.body)
    
         return response.json({
            id,
            name,
            email,
            password
         })
    },

    async show (request, response) {
        
        const {id, name, email , password} = await User.findAndCountAll()
        return response.json({
            id,
            name,
            email,
            password
        })
    }
}