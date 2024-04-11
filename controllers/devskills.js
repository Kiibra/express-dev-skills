import { devskills } from '../data/devskills-data.js'

function index(req, res) {
  res.render('devskills/index', {
    devskills: devskills
  })
}

export {
  index,
}