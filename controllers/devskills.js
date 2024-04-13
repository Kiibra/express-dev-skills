// import { devskills } from '../data/devskills-data.js'
import { Devskill } from "../models/devskill.js"

function index(req, res) {
  Devskill.find({})
  .then(devskills => {
    res.render('devskills/index', {
      devskills: devskills,
      date: req.date
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
  // console.log(req.body)
  // set done/ proficiency property to false
  req.body.done = false

  Devskill.create(req.body)
  .then(devskill => {
    res.redirect('/devskills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/devskills')
  })
}

function deleteDevskill(req, res){
  Devskill.findByIdAndDelete(req.params.devskillId)
  .then(devskill => {
    res.redirect('/devskills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/devskills')
  })
}

function edit(req, res) {
  // find the devskill and pass it to render
  Devskill.findById(req.params.devskillId)
  .then(devskill => {
    // render a vieew  with a form (edit.ejs)
    res.render('devskills/edit', {
      devskill: devskill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/devskills')
  })
  
}

function update(req, res){
  // handle checkbox logic
  req.body.profiency = !!req.body.profiency
  Devskill.findByIdAndUpdate(req.params.devskillId, req.body, {new: true})
  .then(devskill => {
    res.redirect(`/devskills/${req.params.devskillId}`)
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
  deleteDevskill as delete,
  edit,
  update,
}