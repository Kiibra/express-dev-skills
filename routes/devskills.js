import { Router } from 'express'
import { devskills } from '../data/devskills-data'

const router = Router()

// GET localhost:3000/users
// GET localhost:3000/todos
app.get('/', function(req, res) {
  res.render('devskills/index', {
    devskills: devskills
  })
})

export { router }
