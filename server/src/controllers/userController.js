const {object, string} = require ('yup');
const User = require ('../models/User');

module.exports = {
  async create(request, response) {
    const schema = object().shape({
      name: string().required(),
      email: string().email().required(),
      password: string().required().min(6)
    });

    if(!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails.' })
    }

    const {email} = request.body;

    const withEmailUsers = await User.findAll({
      where: {
        email
      }
    });

    if (!(withEmailUsers.length  === 0)){
      return response.status(400).json({msg: 'User já cadastrado!'})
    } 

    const {id, name,password } = await User.create(request.body)
    return response.json({
      id,
      name,
      email,
      password,
    })
  },

    async login (request, response) {
        const {email} = request.body;
       /* const withEmailUsers = await User.findAll({
        where: {
          email
        }
      });

       if (withEmailUsers.length  === 0){
           return response.status(400).json({msg: 'User not found.'})
       } */

       const user = await User.findOne({ where: { email } });

       if (!user) {
         return response.status(401).json({ error: 'User not found' });
       }

       return response.status(200).json({msg: 'User connected!.'})

    }
}