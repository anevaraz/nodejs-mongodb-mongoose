const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema(
	{
    name: String,
    taxvat: String,
    brithday: String,
		gender: String,
		type: String,
		work: [{
      employer: {
        description: String,
        robots: String
      },
      start_date: String,
      end_date: String
    }]
  },
	{ collection: 'user' }
)

UserSchema.index({ name: 1, taxvat: 1 }, { unique: true })

const usersModel = mongoose.model('user', UserSchema)

module.exports = usersModel