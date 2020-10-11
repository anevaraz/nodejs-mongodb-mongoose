const mongoose = require('mongoose')
const usersModel = require('../models/Users')

module.exports = {
  async index(request, response){
    const user = await usersModel.find({})
    return response.status(200).json(user)
  },   
  async show(request, response){
    const { _id } = request.params
    const user = await usersModel.find({ _id })
    return response.status(200).json(user)
  },
  async store(request, response){
    let status
    let message
    try {
      const user = new usersModel(request.body)
      await user.save()
      status = 201
      message = 'User created successfully!'
    } catch (e){
      status = 500
      message = e.message
      if (e.name === 'MongoError' && e.code === 11000) {
        status = 409
        message = 'User already exists.'
      }
    }
    return response.status(status).json(message)
  },
  async update(request, response){
    let status
    let message
    try {
      const { _id } = request.params
      await usersModel.findByIdAndUpdate(_id, request.body, {new : true})
      status = 200
      message = 'User saved successfully.'
    } catch (e) {
      message = e.message
      status = 500
    }
    response.status(status).json(message)
  },

  async destroy(request, response){
    let status
    let message
    const { _id } = request.params
    try {
      usersModel.collection.deleteOne({ _id: mongoose.Types.ObjectId(_id) })
      status = 200
      message = 'User deleted successfully.'
    } catch (e) {
      status = 500
      message = e.message
    }
    return response.status(status).json(message)
  }
}
