import mongoose from 'mongoose'

const Schema = mongoose.Schema

const devskillSchema = new Schema({
  text: String,
  done: Boolean
})

export {
  Devskill
}