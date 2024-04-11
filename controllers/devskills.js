// import { devskills } from '../data/devskills-data.js'
import { Devskill } from "../models/devskill.js"

function index(req, res) {
  Devskill.find({})
  .then(devskills => {
    res.render('devskills/index', {
      devskills: devskills,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newDevSkill(req, res) {
  res.render('devskills/new')
}


export {
  index,
  newDevSkill as new,
}