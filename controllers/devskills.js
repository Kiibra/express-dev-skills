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
function show(req, res){
  // find the Devskill in the Db by its _id
  Devskill.findById(req.params.devskillId)
  .then(devskill => {
    res.render('devskills/show',  {
    devskill: devskill
    })
  })
  .catch(error => {
      console.log(error)
      res.redirect('/devskills')
    })
}

function create(req, res){
  console.log(req.body)
  // set done/ proficiency property to false
  req.body.profiency = false

  Devskill.create(req.body)
  .then(devskill => {
    res.redirect('devskills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/devskills')
  })
}

export {
  index,
  newDevSkill as new,
  show,
  create,
}