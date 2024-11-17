import { Router } from 'express';
import bodyParser from 'body-parser'
import skiTerms from './ski-terms.json' assert {type: 'json'}
import { save } from './lib.js'
const router = new Router();


let definitions = skiTerms;

router.get("/", (req, res) => {
  return res.json(skiTerms);
})

router.post('/', bodyParser.json(), (req, res) => {
  console.log('GET DATA' , definitions)
  definitions.push(req.body);
  console.log('GET DATA 2' , definitions)

  save(definitions)
  res.json({
    status: "success",
    term: req.body
  })
})

router.delete('/:term', bodyParser.json(), (req, res) => {
  const newArr = definitions.filter(({ term }) => term != req.params.term)
  console.log(newArr);
  definitions = newArr;
  save()
  res.json({
    status: "success",
    removed: req.params.terms,
    newLength: definitions.length,
  })
})





export default router;