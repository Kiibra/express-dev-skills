import { Router } from 'express'
import { devskills } from '../data/devskills-data'

const router = Router()

// GET localhost:3000/devskills
app.get('/', function(req, res) {
  res.render('devskills/index', {
    devskills: devskills
  })
})

export { router }
