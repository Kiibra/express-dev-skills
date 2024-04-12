import { Router } from 'express'
import * as devskillsCtrl from '../controllers/devskills.js'
import { devskills } from '../data/devskills-data.js'
// import { devskills } from '../data/devskills-data.js'

const router = Router()

// GET localhost:3000/devskills
router.get('/', devskillsCtrl.index)

// GET localhost:3000/devskills/new
router.get('/new', devskillsCtrl.new)

// GET localhost:3000/devskills/:devskillId
router.get('/:devskillId', devskillsCtrl.show)

// GET localhost:3000/devskills
router.post('/', devskillsCtrl.create)

// GET localhost:3000/devskills/delete


export { router }
