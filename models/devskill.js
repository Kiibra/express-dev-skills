import mongoose from 'mongoose'

const Schema = mongoose.Schema

const devskillSchema = new Schema({
  text: String,
  done: Boolean,
})

const Devskill = mongoose.model('Devskill', devskillSchema)

export {
  Devskill
}