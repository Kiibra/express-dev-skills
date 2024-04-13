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

// GET localhost:3000/devskills/:devskillId/edit
router.get('/:devskillId/edit', devskillsCtrl.edit)

// GET localhost:3000/devskills
router.post('/', devskillsCtrl.create)

// DELETE localhost:3000/devskills/:devskillsId
router.delete('/:devskillId', devskillsCtrl.delete)


// PUT localhost:3000/devskills/:devskillId
router.put('/:devskillId', devskillsCtrl.update)

export { router }
